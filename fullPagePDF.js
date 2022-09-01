const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://www.example.com', { waitUntil: 'networkidle0' });
  await page.pdf({ path: 'examplePDF.pdf', format: 'A4' }); //we can use 3rd party cloudstorage
  await browser.close();
})();
