const puppeteer = require('puppeteer');
describe('Full Page Screenshot', () => {
  let browser;
  let page;
  before(async function () {
    browser = await puppeteer.launch({
      headless: true,
      slowMo: 0,
      devtools: false,
    });
    page = await browser.newPage();
    await page.setDefaultTimeout(10000);
    await page.setDefaultNavigationTimeout(10000);
  });
  after(async function () {
    await browser.close();
  });
  it('should take a full screenshot', async function () {
    await page.goto('http://www.example.com', { waitUntil: 'networkidle0' }); //will wait until there are no more running requests in the browser, yhat means that the website is full loaded
    await page.screenshot({ path: 'page.png', fullPage: 'true' });
  });
});
