const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  // Accesibility Test
  await page.goto('https://pptr.dev');
  await page.waitForSelector('title');
  await page.waitForTimeout(10000);
  const snapshot = await page.accessibility.snapshot();
  console.log(snapshot);
  await page.waitForTimeout(10000);
  await browser.close();
})();
