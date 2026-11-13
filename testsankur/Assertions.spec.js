import test ,{ page,expect } from '@playwright/test'

test('assertions demo',async({page})=>{
    await page.goto('https://www.flipkart.com/')
    await page.pause()
    // Assertions
    // present or not
    // await expect( page.locator('(//img[@alt="Image"])[2]')).toHaveCount(1)
    // if(await page.$('(//img[@alt="Image"])[2]'))
    // {
    //     await page.locator('(//img[@alt="Image"])[2]').click()
//}
     // check element enable disable visible hiden
    // await expect(page.locator('(//img[@alt="Image"])[2]')).toBeVisible()
    // await expect.soft(page.locator('(//img[@alt="Image"])[2]')).toBeHidden()
    // await expect(page.locator('(//img[@alt="Image"])[2]')).toBeEnabled()
    // await expect.soft(page.locator('(//img[@alt="Image"])[2]')).toBeDisabled()

    // check negative assertion match text

  //  await expect(page.locator('(//img[@alt="Image"])[2]')).toHaveAttribute('alt','Image')
   // check url
   await expect(page).toHaveURL('https://www.flipkart.com/')
   await expect(page).toHaveTitle(/Online Shopping Site/)
  //await expect(page).toHaveTitle(/flipkart/i)
  await expect(page).toHaveScreenshot()

})