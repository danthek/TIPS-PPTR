const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.emulate(puppeteer.devices['iPhone X']);
  await page.goto('http://www.example.com', { waitUntil: 'networkidle0' });
  await page.waitForTimeout(5000);
  await browser.close();
})();

//It can be done like always: assigning the device into a variable and pass it as prop on the emulate() function
/* const puppeteer = require('puppeteer');
const iPhone = puppeteer.devices['iPhone 6'];
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.emulate(iPhone);
  await page.goto('https://www.google.com');
  // other actions...
  await browser.close();
})(); */
