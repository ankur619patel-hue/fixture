import {test,expect} from '@playwright/test';

test ('handle frames',async({page})=>{

   // await page.goto('https://the-internet.herokuapp.com/nested_frames');
   await page.goto('https://ui.vision/demo/webtest/frames/');
   const allframes = await page.frames();
   console.log("all frames number:", allframes.length);
   const frameElement = await page.frameLocator('xpath=//html/frameset/frame[1]');

   const input = frameElement.locator('xpath=//input[@name="mytext1"]');
   await expect(input).toBeVisible();
   await input.fill('ankur');
   await page.screenshot({path:'tests/image/frame.png',fullPage:true});


});