import type { LaunchOptions } from 'puppeteer';

const IS_PROD = process.env.NODE_ENV === 'production';

const REMOTE_DEBUG = process.env.REMOTE_DEBUG === "true" || process.env.REMOTE_DEBUG === "1"
const CHROME_USER_AGENT = process.env.CHROME_USER_AGENT || 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
const CHROME_LANG = process.env.CHROME_LANG || 'en-US';

const options: LaunchOptions = {
  slowMo: 10,
  args: [
      "--use-gl=egl",
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--disable-gpu",
      "--disable-notifications",
      "--window-size=1280,720",
      "--disable-blink-features=AutomationControlled",
      "--disable-features=IsolateOrigins,site-per-process",
      "--no-first-run",
      "--no-default-browser-check",
      `--user-agent=${CHROME_USER_AGENT}`,
      `--lang=${CHROME_LANG}`,
    ],
    defaultViewport: null,
    headless: IS_PROD ? true : false,
    // headless: "shell",
    devtools: IS_PROD ? false : true,
    userDataDir: "./profile"
};

if (REMOTE_DEBUG) {
  options.args?.push(
    "--remote-debugging-address=0.0.0.0",
    "--remote-debugging-port=9222"
  );
}

if (process.env.VPN_HOST) {
  options.args?.push(`--proxy-server=${process.env.VPN_HOST}`);
}

export default options;