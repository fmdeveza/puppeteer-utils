import fs from 'fs';

import 'dotenv/config';
import type { Page } from 'puppeteer';

export { launch } from './launch';

export { options } from './options';

export const wait = async (ms: number = 3000) => {
  console.log("Waiting for", ms/1000, "seconds...");
  await new Promise(resolve => setTimeout(resolve, ms));
}

export const wait4ever = async () => {
  console.log("Waiting forever...");
  await new Promise(() => {});
}

export const print = async (page: Page, label: string) => {
  const path = `./screenshots/${label}.png`;
  const dir = path.substring(0, path.lastIndexOf('/'));
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  console.log("Saving screenshot to:", path);
  await page.screenshot({ path });
}

export const printDebug = async (page: Page) => {
  // const dateTimestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const timestamp = new Date().valueOf().toString();
  await print(page, `debug-${timestamp}`);
}
