import 'dotenv/config';
import puppeteer from 'puppeteer';

import options from './options';

async function main() {
  // console.log(process.env);
  const browser = await puppeteer.launch(options);
  const page = await browser.newPage();
  await page.goto('https://developer.chrome.com/');
  await page.screenshot({ path: 'screenshot.png' });
  await browser.close();
}

main();
