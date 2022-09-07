const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const context = await browser.createIncognitoBrowserContext();
  const page = await context.newPage();
  await page.goto('http://www.example.com');
  await page.waitForTimeout(25000);
  await browser.close();
})();
