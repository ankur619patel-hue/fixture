import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { PIMPage, type EmployeeData } from './pages/PIMPage';
import { generateEmployeeData } from './utils/randomData';

const adminUsername = 'Admin';
const adminPassword = 'admin123';

test.describe('Orange HRM end-to-end flow', () => {
  test('admin can add a new employee and verify it exists', async ({ page }, testInfo) => {
    const loginPage = new LoginPage(page);
    const pimPage = new PIMPage(page);
    const employee = generateEmployeeData() as EmployeeData;

    await test.step('Open login page', async () => {
      await loginPage.goto();
    });

    await test.step('Log in as admin', async () => {
      await loginPage.login(adminUsername, adminPassword);
      await loginPage.expectLoginSuccess();
    });

    await test.step('Navigate to employee list', async () => {
      await pimPage.navigateToEmployeeList();
    });

    await test.step('Add a new employee with random data', async () => {
      await pimPage.addEmployee(employee);
    });

    await test.step('Verify the employee was added correctly', async () => {
      await pimPage.verifyEmployeeExists(employee);
    });
  });
});
