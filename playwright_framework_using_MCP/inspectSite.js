const { chromium } = require('@playwright/test');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://opensource-demo.orangehrmlive.com');
  await page.fill('input[name="username"]', 'Admin');
  await page.fill('input[name="password"]', 'admin123');
  await page.click('button:has-text("Login")');
  await page.waitForLoadState('networkidle');
  console.log('URL1', page.url());
  console.log('PIM links', await page.$$eval('a', els => els.map(e => e.textContent.trim()).filter(Boolean)));
  await page.click('a:has-text("PIM")');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(3000);
  console.log('URL2', page.url());
  console.log('Buttons', await page.$$eval('button', els => els.map(e => e.textContent.trim()).filter(Boolean)));
  console.log('Inputs', await page.$$eval('input', els => els.map(e => ({name:e.name, id:e.id, placeholder:e.placeholder, ariaLabel:e.getAttribute('aria-label'), type:e.type})).filter(i => i.name || i.id || i.placeholder || i.ariaLabel)));
  console.log('Search container HTML', await page.$eval('div[class*="oxd-table-filter"]', el => el.outerHTML.slice(0, 1800)).catch(() => 'missing'));
  const searchFields = await page.$$eval('div.oxd-input-group', els => els.map(field => {
    const label = field.querySelector('label')?.textContent?.trim() || '';
    const input = field.querySelector('input');
    return {
      label,
      outerHTML: field.outerHTML.slice(0, 400),
      placeholder: input?.placeholder || '',
      name: input?.name || '',
      type: input?.type || '',
      ariaLabel: input?.getAttribute('aria-label') || ''
    };
  }));
  console.log('Search fields', JSON.stringify(searchFields, null, 2));
  const nameField = await page.$('label:has-text("Employee Name")');
  if (nameField) {
    const fieldParent = await nameField.evaluateHandle(label => label.closest('.oxd-input-group'));
    const inputHTML = await fieldParent.evaluate(el => el.querySelector('input')?.outerHTML || 'none');
    console.log('Employee Name field HTML', inputHTML);
    const count = await page.$$eval('label:has-text("Employee Name") ~ div input', els => els.length);
    console.log('Sibling input count near Employee Name label', count);
  }
  await page.click('button:has-text("Add")');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(3000);
  console.log('Add page URL', page.url());
  console.log('Add page headers', await page.$$eval('label', els => els.map(e => e.textContent.trim()).filter(Boolean).slice(0, 30)));
  console.log('Add page inputs', await page.$$eval('input', els => els.map(e => ({name:e.name, id:e.id, placeholder:e.placeholder, type:e.type})).slice(0,30)));
  await page.fill('input[placeholder="First Name"]', 'Test');
  await page.fill('input[placeholder="Last Name"]', 'User');
  await page.click('button:has-text("Save")');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(3000);
  console.log('After save URL', page.url());
  console.log('After save title', await page.title());
  console.log('Save button HTML', await page.$eval('button:has-text("Save")', el => el.outerHTML));
  console.log('Toasts', await page.$$eval('div.oxd-toast', els => els.map(e => e.textContent.trim())));
  console.log('Error messages', await page.$$eval('.oxd-form-error-message, .oxd-input-field-error-message, .oxd-alert-content-text', els => els.map(e => e.textContent.trim())));
  console.log('Body text snippet', await page.locator('body').textContent().then(text => text?.slice(0,1200)));
  const employeeId = await page.locator('label:has-text("Employee Id") ~ div input').inputValue().catch(() => 'none');
  console.log('Employee ID after save', employeeId);
  await browser.close();
})();
