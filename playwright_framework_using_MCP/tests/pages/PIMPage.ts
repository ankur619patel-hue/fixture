import { expect, type Page, type Locator } from '@playwright/test';

export interface EmployeeData {
  firstName: string;
  lastName: string;
  middleName?: string;
  username: string;
  password: string;
  fullName: string;
}

export class PIMPage {
  readonly page: Page;
  readonly menuPIM: Locator;
  readonly addButton: Locator;
  readonly firstName: Locator;
  readonly middleName: Locator;
  readonly lastName: Locator;
  readonly saveButton: Locator;
  readonly successMessage: Locator;
  readonly employeeNameSearch: Locator;
  readonly searchButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.menuPIM = page.getByRole('link', { name: /pim/i }).first();
    this.addButton = page.getByRole('button', { name: /add/i }).first();
    this.firstName = page.locator('input[name="firstName"], input[placeholder*="First Name"], input[aria-label*="first name"]');
    this.middleName = page.locator('input[name="middleName"], input[placeholder*="Middle Name"], input[aria-label*="middle name"]');
    this.lastName = page.locator('input[name="lastName"], input[placeholder*="Last Name"], input[aria-label*="last name"]');
    this.saveButton = page.getByRole('button', { name: /save/i }).first();
    this.successMessage = page.locator('text=Successfully Saved').first();
    this.employeeNameSearch = page.locator('div.oxd-input-group:has-text("Employee Name") input');
    this.searchButton = page.getByRole('button', { name: /search/i }).first();
  }

  async navigateToEmployeeList() {
    await this.menuPIM.click();
    await this.page.waitForURL('**/pim/viewEmployeeList*', { timeout: 20000 });
    await expect(this.addButton).toBeVisible({ timeout: 15000 });
  }

  async addEmployee(employee: EmployeeData) {
    await this.addButton.click();
    await expect(this.firstName).toBeVisible({ timeout: 15000 });
    await this.firstName.fill(employee.firstName);
    await this.middleName.fill(employee.middleName ?? '');
    await this.lastName.fill(employee.lastName);
    await this.saveButton.click();
    await expect(this.successMessage).toBeVisible({ timeout: 20000 });
  }

  async verifyEmployeeExists(employee: EmployeeData) {
    await this.navigateToEmployeeList();
    await expect(this.employeeNameSearch).toBeVisible({ timeout: 15000 });
    await this.employeeNameSearch.fill(employee.fullName);
    await this.employeeNameSearch.press('Enter');
    await this.searchButton.click();
    const employeeRow = this.page.locator(`.oxd-table-body .oxd-table-card:has-text("${employee.fullName}")`).first();
    await expect(employeeRow).toBeVisible({ timeout: 20000 });
  }
}
