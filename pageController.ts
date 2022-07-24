import { Browser } from "puppeteer";
import { scraperObject as pageScraper } from "./pageScraper";

export async function scrapeAll(browserInstance: Promise<Browser | undefined>) {
  let browser;
  try {
    browser = await browserInstance;
    await pageScraper.scraper(browser!);
  } catch (err) {
    console.log("Could not resolve the browser instance => ", err);
  }
}
