// ES5: const puppeteer = require('puppeteer');
//ES6:
import puppeteer from 'puppeteer';
import HomePage from './homePage';
describe('Loads URL', () => {
  let browser;
  let page;
  let homePage;
  before(async function () {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 0,
      devtools: false,
    });
    page = await browser.newPage();
    homePage = new HomePage(page); // here we pass the page parameter so the constructor takes it and its able to call the needed async functions inside homePage.js
    await page.setDefaultTimeout(10000);
    await page.setDefaultNavigationTimeout(10000);
  });
  after(async function () {
    await browser.close();
  });
  it('should load the URL', async function () {
    //await page.goto('http://www.example.com'); we comment this beacause now we can use the homepage.js visit() method.
    await homePage.visit(); // here we use our new homepage
  });
});
