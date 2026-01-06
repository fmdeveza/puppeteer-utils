import puppeteer from 'puppeteer';

async function main() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://developer.chrome.com/');
  await page.screenshot({ path: 'screenshot.png' });
  await browser.close();
}

main();
