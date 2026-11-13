
import { test, expect } from '@playwright/test';
import XLSX from 'xlsx';

const workbookPath = 'newlogindata.xlsx';
const workbook = XLSX.readFile(workbookPath);
const sheet = workbook.Sheets[workbook.SheetNames[0]];
const data = XLSX.utils.sheet_to_json(sheet);

test.describe('login functionality', () => {
  for (const { email, password, description } of data) {
    // const email = row.email;
    // const password = row.password;
    // const description = row.description;

    test(`login test data for ${email} and ${password}`, async ({ page }) => {
      await page.goto('https://demowebshop.tricentis.com/login');
      await page.locator("//input[@id='Email']").fill(email);
      await page.locator("//input[@id='Password']").fill(password);
      await page.locator("//input[@value='Log in']").click();

      if (description.toLowerCase() === 'valid user') {
        await expect(page.locator("//a[@class='ico-logout']")).toBeVisible();
      } else if (description.toLowerCase() === 'invalid user') {
        await expect(page.locator("//div[@class='validation-summary-errors']")).toBeVisible();
      }
    });
  }
});

