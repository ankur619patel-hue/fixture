import { test , expect } from '@playwright/test';

const logindata = [
  ['ankur@gmail.com', 'Ankur123', 'invalid user'],
  ['john@gmail.com', 'John123', 'invalid user']
];

test.describe('login test', () =>{
    for (const [email, password, description] of  logindata) {

    test(`login test data for ${email} and ${password}`,async ({ page }) =>{

      await page.goto('https://demowebshop.tricentis.com/login');
      await page.locator("//input[@id='Email']").fill(email);
      await page.locator("//input[@id='Password']").fill(password);
      await page.locator("//input[@value='Log in']").click();

      if(description.toLowerCase()==="valid user" )
        {
                    await expect(page.locator("//a[@class='ico-logout']")).toBeVisible();

        }
        else(description.toLowerCase()==="invalid user")
        {
                    await expect(page.locator("//div[@class='validation-summary-errors']")).toBeVisible();

        }



    });
           }

  
});

