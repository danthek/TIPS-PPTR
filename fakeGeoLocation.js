const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  //grant permissions for geolocation change
  const context = browser.defaultBrowserContext();
  await context.overridePermissions('https://pptr.dev', ['geolocation']);
  await page.goto('https://pptr.dev', { waitUntil: 'networkidle0' });
  await page.waitForSelector('title');
  // change the geoloaction in the north pole
  await page.setGeolocation({ latitude: 90, longitude: 0 });
  await browser.close();
})();
