import {test,expect} from '@playwright/test'

test('demo login page1',async({page})=>{

    await page.goto('https://demo.applitools.com/')
   // await page.pause()
    await page.locator('id=username').fill('Raghav')
        await page.locator('#username').fill('raghav')
    await page.locator('id=password').fill('1234')

    await page.locator('#password').fill('1234')
    await page.locator('#log-in').click()

});

// test ('Demo login test 2', async({page})=>{
    
//     await page.goto('https://www.google.com/')
//     await page.pause()



// })

// test('demo login test 3',async({page})=>{
   


// })



