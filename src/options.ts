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
      "--disable-features=IsolateOrigins,site-per-process",
      `--user-agent=${process.env.CHROME_USER_AGENT || 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'}`,
      `--lang=${process.env.CHROME_LANG || 'en-US'}`,
    ],
    defaultViewport: null,
    headless: isProd ? true : false,
    devtools: isProd ? false : true,
    userDataDir: "./profile"
};

export default options;