import {test,expect } from '@playwright/test';
test('Alert handling',async({page})=>{
await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
//await page.locator("//button[text()='Click for JS Alert']").click();
await page.locator("//button[text()='Click for JS Confirm']").click();
await page.waitForTimeout(3000);

  page.on('dialog', async dialog => {
    console.log(dialog.message());
    await dialog.accept();

})
await page.screenshot({path:'tests/image/alert3.png',fullPage:true});



});
