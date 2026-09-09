import { chromium } from "playwright";
import { spawn } from "node:child_process";
import { mkdir, stat } from "node:fs/promises";
import path from "node:path";

const OUT = "/workspace/public/outreach";
const TMP = "/tmp/simpex-capture";
await mkdir(OUT, { recursive: true });
await mkdir(TMP, { recursive: true });

function run(cmd, args) {
  return new Promise((resolve, reject) => {
    const p = spawn(cmd, args, { stdio: "inherit" });
    p.on("exit", (code) =>
      code === 0 ? resolve() : reject(new Error(`${cmd} ${args.join(" ")} -> ${code}`)),
    );
  });
}

async function info(file) {
  const s = await stat(file);
  console.log("FILE", file, s.size);
}

async function hideInjectedChrome(page) {
  await page.addStyleTag({
    content: `
      iframe[src*="grok.com"],
      iframe[src*="grok-app-builder"],
      [data-grok],
      a[href*="grok.com/grok-app-builder"] {
        display: none !important;
        visibility: hidden !important;
      }
    `,
  });
}

const browser = await chromium.launch({
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
});

async function fullScroll(page) {
  await page.evaluate(async () => {
    const delay = (ms) => new Promise((r) => setTimeout(r, ms));
    const height = () => document.documentElement.scrollHeight;
    let y = 0;
    while (y < height()) {
      y += 600;
      window.scrollTo(0, y);
      await delay(250);
    }
    window.scrollTo(0, 0);
    await delay(400);
  });
}

// BEFORE — live original
{
  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1,
  });
  page.setDefaultTimeout(60000);
  console.log("capturing original…");
  await page.goto("https://simpexrepipe.com/", {
    waitUntil: "domcontentloaded",
    timeout: 60000,
  });
  await page.waitForTimeout(4000);
  await fullScroll(page);
  await page.waitForTimeout(1500);
  await page.screenshot({
    path: path.join(OUT, "before-original-desktop.png"),
    fullPage: true,
  });
  await page.close();
  await info(path.join(OUT, "before-original-desktop.png"));
}

// AFTER desktop
{
  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1,
  });
  console.log("capturing after desktop…");
  await page.goto("http://127.0.0.1:8080/", { waitUntil: "networkidle" });
  await hideInjectedChrome(page);
  await page.waitForTimeout(800);
  await page.screenshot({
    path: path.join(OUT, "after-desktop.png"),
    fullPage: true,
  });
  await page.close();
  await info(path.join(OUT, "after-desktop.png"));
}

// AFTER mobile
{
  const page = await browser.newPage({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
  });
  console.log("capturing after mobile…");
  await page.goto("http://127.0.0.1:8080/", { waitUntil: "networkidle" });
  await hideInjectedChrome(page);
  await page.waitForTimeout(800);
  await page.screenshot({
    path: path.join(OUT, "after-mobile.png"),
    fullPage: true,
  });
  await page.close();
  await info(path.join(OUT, "after-mobile.png"));
}

// Scrolling video
{
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    recordVideo: { dir: TMP, size: { width: 1440, height: 900 } },
  });
  const page = await context.newPage();
  console.log("recording scroll…");
  await page.goto("http://127.0.0.1:8080/", { waitUntil: "networkidle" });
  await hideInjectedChrome(page);
  await page.waitForTimeout(900);
  await page.evaluate(async () => {
    const delay = (ms) => new Promise((r) => setTimeout(r, ms));
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const steps = 48;
    for (let i = 0; i <= steps; i++) {
      window.scrollTo({ top: (max * i) / steps, behavior: "auto" });
      await delay(90);
    }
    await delay(600);
  });
  const video = page.video();
  await page.close();
  const webm = await video.path();
  await context.close();
  console.log("webm", webm);

  const mp4 = path.join(OUT, "after-scroll.mp4");
  const gif = path.join(OUT, "after-scroll.gif");
  await run("ffmpeg", [
    "-y",
    "-i",
    webm,
    "-vf",
    "fps=12,scale=1440:-1:flags=lanczos",
    "-c:v",
    "libx264",
    "-pix_fmt",
    "yuv420p",
    "-movflags",
    "+faststart",
    mp4,
  ]);
  await run("ffmpeg", [
    "-y",
    "-i",
    webm,
    "-vf",
    "fps=8,scale=720:-1:flags=lanczos,split[s0][s1];[s0]palettegen=max_colors=64[p];[s1][p]paletteuse",
    gif,
  ]);
  await info(mp4);
  await info(gif);
}

await browser.close();
console.log("capture complete");
