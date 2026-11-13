import{test,expect} from '@playwright/test';

test('launch amazon url',async({page})=>{
     await page.goto('https://www.amazon.in/');
    await expect(page).toHaveURL('https://www.amazon.in/');  
    await expect(page).toHaveTitle(/Amazon/);
  //  await page.locator("//input[@id='twotabsearchtextbox']").fill('laptop');
   // page.pause();
   //await page.locator("//span[text()='under 35000']").click();
    await page.getByRole('searchbox',{name:'Search Amazon.in'}).fill('laptop');
        await page.getByRole('button',{name:'laptop under 35000'}).click();
        await page.getByRole()

  //  await expect(page).toHaveTitle(/Amazon/);





})