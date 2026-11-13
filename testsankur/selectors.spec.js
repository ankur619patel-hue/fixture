import {test,expect} from '@playwright/test'

test('selector demo',async({page})=>{

   await page.goto('https://www.saucedemo.com')
  await page.pause()
  await page.click('id=user-name')
  await page.locator('id=user-name').fill('standard_user')
  //  await page.locator('xpath=//input[@name="password"]').fill('secret_sauce')
      await page.locator('//input[@name="password"]').fill('secret_sauce')


  //css selector #login-button
 // await page.locator('#login-button').click()
 // await page.locator('text=LOGIN').click()
await page.locator('input:has-text("LOGIN")').click()
});