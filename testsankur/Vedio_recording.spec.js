import {test,expect,chromium} from '@playwright/test'
test('video reccrding1',async()=>{
 const browser= await chromium.launch({
    slowMo:50,
    headless:false

 })
    const context= await browser.newContext({
        recordVideo:{
            dir:'vedeos/',
            size:{width:800,height:800}
        }
    });
    const page=await context.newPage();
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button123"]').click();
    await context.close();





});