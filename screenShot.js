const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://www.example.com', { waitUntil: 'networkidle0' }); //will wait until there are no more running requests in the browser, yhat means that the website is full loaded
  await page.screenshot({
    path: 'examplePageScreenshot.png',
    fullPage: 'true',
  });
  await browser.close();
})();
