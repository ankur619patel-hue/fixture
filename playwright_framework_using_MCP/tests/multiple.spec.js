import { test, expect } from '@playwright/test';

test('mutiple tabs and windows', async ({  page, context }) => {
  await page.goto('https://freelance-learn-automation.vercel.app/login');

  await page.screenshot({path:'tests/image/loginurl.png',fullpage:true});
const [newPage] = await Promise.all([
  context.waitForEvent('page'),
  page.locator("//*[@id='login_container']/div/div/a[4]").click()
  
  
]);

//await [newPage].screenshot({path:'tests/image/switch',fullPage:true});








  // const [newPage] = await Promise.all([
  //   context.waitForEvent('page'),
  //   page.locator("//*[@id='login_container']/div/div/a[4]").click()
  // ]);

//   await newPage.waitForLoadState('domcontentloaded');
  // await page.pause();
   await newPage.locator("(//input[@name='email'])[2]").fill("ankur@gmail.com");
   await newPage.screenshot({path:'tests/image/face.png',fullPage:true});
  // await newPage.screenshot({ path: 'tests/image/newpage.png', fullPage: true });
});
