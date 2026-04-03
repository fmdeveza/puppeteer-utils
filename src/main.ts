import { wait4ever, printDebug } from './index';
import { launch } from './launch';

async function main() {
  console.log("Starting main execution...");
  console.log("Env variables:", process.env);
  const [browser, page] = await launch();
  try {
    // await page.goto('https://onlinenotepad.org/notepad');
    await page.goto('https://google.com');
    await wait4ever();
    await printDebug(page);
  } catch (error) {
    console.error("Error in main execution:", error);
    throw error;
  } finally {
    await browser.close();
    // unlockProfile(options.userDataDir);
    console.info("Main execution finished.");
  }
}

main().catch((error) => {
  console.error("Fatal error:", error);
  process.exit(1);
});

