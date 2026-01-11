import type { LaunchOptions } from 'puppeteer';

const isProd = process.env.NODE_ENV === 'production';

const options: LaunchOptions = {
  slowMo: 10,
  args: [
      "--use-gl=egl",
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--disable-notifications",
      "--window-size=1280,720",
      "--disable-blink-features=AutomationControlled",
      "--disable-features=IsolateOrigins,site-per-process"
    ],
    defaultViewport: null,
    headless: isProd ? true : false,
    devtools: isProd ? false : true,
};

export default options;