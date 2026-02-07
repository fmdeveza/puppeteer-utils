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
  console.log("Starting main execution...");
  console.log("Env variables:", process.env);
  console.log("Puppeteer options:", options);
  const browser = await puppeteer.launch(options);
  try {
    const page = await browser.newPage();
    await page.goto('https://developer.chrome.com/');
    await wait4ever();
    await printDebug(page);
  } catch (error) {
    console.error("Error in main execution:", error);
    throw error;
  } finally {
    await browser.close();
    console.info("Main execution finished.");
  }
}

main().catch((error) => {
  console.error("Fatal error:", error);
  process.exit(1);
});
