import { chromium } from "playwright";
const browser = await chromium.launch({ args: ["--no-sandbox"] });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
page.on("console", (m) => { if (m.type() === "error") console.log("CONSOLE", m.text()); });
await page.goto("http://127.0.0.1:8080/", { waitUntil: "networkidle", timeout: 30000 });
await page.waitForTimeout(800);
await page.screenshot({ path: "/workspace/screenshots/home-desktop-1440.png", fullPage: true });
await page.setViewportSize({ width: 390, height: 844 });
await page.waitForTimeout(400);
await page.screenshot({ path: "/workspace/screenshots/home-mobile-390.png", fullPage: true });
// inner pages desktop
for (const path of ["/work", "/about", "/contact", "/services/pex-repipe", "/outreach", "/testimonials"]) {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("http://127.0.0.1:8080" + path, { waitUntil: "networkidle", timeout: 20000 });
  await page.waitForTimeout(400);
  const name = path.replaceAll("/", "_") || "home";
  await page.screenshot({ path: `/workspace/screenshots/page${name}.png`, fullPage: true });
}
await browser.close();
console.log("qa screenshots done");
