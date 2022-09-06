const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  // Performance Test
  await page.goto('https://pptr.dev');
  await page.waitForSelector('title');
  //Execute navigation API within the page context
  const metrics = await page.evaluate(() => JSON.stringify(window.performance));
  console.log(JSON.parse(metrics));
  // without parse console.log(metrics);
  await browser.close();
})();
