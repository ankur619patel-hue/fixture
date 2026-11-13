const { expect } = require('@playwright/test');

class FlipkartHomePage {
  constructor(page) {
    this.page = page;
    this.searchInput = page.locator('input[title="Search for Products, Brands and More"]').first();
    this.fashionLink = page.locator('a:has-text("Fashion")').first();
  }

  async goto() {
    await this.page.goto('https://www.flipkart.com/');
    await this.page.waitForLoadState('domcontentloaded');
    await this.page.waitForLoadState('networkidle');
  }

  async closeLoginPopup() {
    const closeButton = this.page.getByRole('button', { name: /close|✕/i }).first();
    if (await closeButton.isVisible().catch(() => false)) {
      await closeButton.click();
    }
  }

  async clickFashion() {
    await this.fashionLink.click();
    await this.page.waitForLoadState('networkidle');
  }

  async searchFor(term) {
    await this.searchInput.fill(term);
    await this.page.keyboard.press('Enter');
    await this.page.waitForLoadState('networkidle');
  }
}

class FlipkartSearchResultsPage {
  constructor(page) {
    this.page = page;
  }

  async verifyProductVisible(productName) {
    const product = this.page.getByText(productName, { exact: false }).first();
    await expect(product).toBeVisible({ timeout: 20000 });
  }
}

module.exports = {
  FlipkartHomePage,
  FlipkartSearchResultsPage,
};
