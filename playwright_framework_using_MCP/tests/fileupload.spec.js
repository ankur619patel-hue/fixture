import { test, expect } from '@playwright/test';

test('file upload', async ({ page }) => {
  await page.goto('https://cgi-lib.berkeley.edu/ex/fup.html');

  const fileInput = page.locator('input[type="file"]');
  await expect(fileInput).toBeVisible();

  await fileInput.setInputFiles('tests/image/alert.png');
  await page.screenshot({ path: 'tests/image/fileupload.png', fullPage: true });

  // await expect(fileInput).toHaveValue(/sample\.txt/);
});