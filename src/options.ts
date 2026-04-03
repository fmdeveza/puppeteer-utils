import type { LaunchOptions } from 'puppeteer';

const IS_PROD = process.env.NODE_ENV === 'production';
const REMOTE_DEBUG = process.env.REMOTE_DEBUG === "true" || process.env.REMOTE_DEBUG === "1";
const CHROME_USER_AGENT = process.env.CHROME_USER_AGENT || "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";
const CHROME_LANG = process.env.CHROME_LANG || "en-US";
const CHROME_BIN = process.env.CHROME_BIN || "";
export const VPN_ENABLED: boolean = (
  process.env.VPN_ENABLED === 'true' || process.env.VPN_ENABLED === '1'
) && Boolean(process.env.VPN_HOST)
  && Boolean(process.env.VPN_USERNAME)
  && Boolean(process.env.VPN_PASSWORD);

export const options: LaunchOptions = {
  defaultViewport: null,
  userDataDir: "./profile",
  ...(CHROME_BIN && { executablePath: CHROME_BIN }),
  headless: IS_PROD,
  devtools: !IS_PROD,
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
    ...(REMOTE_DEBUG ? ["--remote-debugging-address=0.0.0.0", "--remote-debugging-port=9222"] : []),
    ...(VPN_ENABLED ? [`--proxy-server=${process.env.VPN_HOST}`] : []),
  ],
};

export default options;