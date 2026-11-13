const { test, expect } = require('@playwright/test');
const { FlipkartHomePage, FlipkartSearchResultsPage } = require('../pages/FlipkartPage');

test('Search T-shirts on Flipkart and verify product', async ({ page }) => {
  const homePage = new FlipkartHomePage(page);
  const searchResultsPage = new FlipkartSearchResultsPage(page);

  await homePage.goto();
  await homePage.closeLoginPopup();
  await homePage.clickFashion();
  await homePage.searchFor('T-shirts');

  await searchResultsPage.verifyProductVisible('Faded Short Sleeve T-shirts');
  await expect(page).toHaveTitle(/Flipkart/i);
});
