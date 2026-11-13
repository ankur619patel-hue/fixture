import {test,expect} from '@playwright/test';

test('scroll funcion',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        page.pause();
    await page.locator("//input[@name='username']").fill('Admin');
    await page.locator("//input[@name='password']").fill('admin123');
    await page.locator("//button[@type='submit']").click();
    await page.waitForLoadState('networkidle');
    //await page.locator("//a[normalize-space()='PIM']").click();
            page.pause();
    await page.locator("//span[text()='PIM']").click();
    await page.waitForLoadState('networkidle');
await page.keyboard.press('PageDown'); 
await page.screenshot({path:'tests/image/scrollkey.png',fullPage:true});
    //const scroll=await page.locator("//span[@class='oxd-text oxd-text--span']");
   // await scroll.scrollIntoViewIfNeeded();



    


})