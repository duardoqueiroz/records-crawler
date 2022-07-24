import { Browser } from "puppeteer";

export const scraperObject = {
  url: "https://web.telegram.org/z/",
  async scraper(browser: Browser) {
    let page = await browser.newPage();
    console.log(`Navigating to ${this.url}...`);
    await page.goto(this.url);
  },
};
