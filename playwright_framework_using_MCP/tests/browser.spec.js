import{test,expect, chromium} from '@playwright/test';

test('open browser', async () => {

    const browser= await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.google.com/');
    await page.screenshot({path:'tests/image/google.png',fullpage:true});
  
  //  browser.close();



});