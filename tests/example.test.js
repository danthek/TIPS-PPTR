const puppeteer = require('puppeteer');
describe('Full Page Screenshot', () => {
  let browser;
  let page;
  before(async function () {
    browser = await puppeteer.launch({
      headless: false,
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
    await page.goto('http://www.example.com');
    await page.screenshot({ path: 'page.png', fullPage: 'true' });
  });
});
