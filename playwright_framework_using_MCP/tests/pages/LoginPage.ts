import { expect, type Page, type Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly username: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;
  readonly errorNotification: Locator;

  constructor(page: Page) {
    this.page = page;
    this.username = page.locator('input[name="username"], input[placeholder*="Username"], input[aria-label*="username"]');
    this.password = page.locator('input[name="password"], input[placeholder*="Password"], input[aria-label*="password"]');
    this.loginButton = page.getByRole('button', { name: /login/i }).first();
    this.errorNotification = page.locator('.oxd-alert-content-text, .error, .toast-error');
  }

  async goto() {
    await this.page.goto('/');
    await this.page.waitForLoadState('networkidle');
    await expect(this.username).toBeVisible({ timeout: 15000 });
  }

  async login(username: string, password: string) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginButton.click();
  }

  async expectLoginSuccess() {
    await expect(this.page.locator('h6:has-text("Dashboard")')).toBeVisible({ timeout: 20000 });
  }

  async expectLoginFailure() {
    await expect(this.errorNotification).toBeVisible({ timeout: 10000 });
  }
}
