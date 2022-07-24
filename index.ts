import { startBrowser } from "./browser";
import { scrapeAll } from "./pageController";

const browserInstance = startBrowser();

scrapeAll(browserInstance);
