import {test,expect} from '@playwright/test';

const item  =['computer','laptop','notebook'];
for(const items of item){

test(`Search demo page for ${items}`,async({page})=>{
  
    await page.goto('https://demowebshop.tricentis.com/');
    await page.locator("//input[@id='small-searchterms']").fill(items);
    await page.locator("//input[@value='Search']").click(); 



});
}