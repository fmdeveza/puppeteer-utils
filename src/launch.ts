import puppeteer from 'puppeteer-extra';
import { Browser, Page } from 'puppeteer';
import AdblockerPlugin from 'puppeteer-extra-plugin-adblocker';

import options, { VPN_ENABLED } from './options';

export const launch = async (): Promise<[Browser, Page]> => {
  console.log("Puppeteer options:", options);

  puppeteer.use(AdblockerPlugin({ blockTrackers: true }));
  
  const browser = await puppeteer.launch(options);
  const page = await browser.newPage();

  if (VPN_ENABLED) {
    await page.authenticate({
      username: process.env.VPN_USERNAME!,
      password: process.env.VPN_PASSWORD!,
    });
  }

  return [browser, page];
}

export default launch;
