import 'dotenv/config';
import puppeteer from 'puppeteer';
import type { Page } from 'puppeteer';

import options from './options';


const wait = async (ms: number = 3000) => {
  console.log("Waiting for", ms/1000, "seconds...");
  await new Promise(resolve => setTimeout(resolve, ms));
}

const wait4ever = async () => {
  console.log("Waiting forever...");
  await new Promise(() => {});
}

async function main() {
  // console.log(process.env);
  const browser = await puppeteer.launch(options);
  const page = await browser.newPage();
  await page.goto('https://developer.chrome.com/');
  await page.screenshot({ path: './screenshots/screenshot.png' });
  await browser.close();
}

main();
