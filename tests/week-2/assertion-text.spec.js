const { test, expect } = require('@playwright/test');

test.beforeEach('should open URL', async ({ page }) => {
    await page.goto('https://www.globalsqa.com/demo-site/select-dropdown-menu/');
  });

test('has dropdown menu text', async ({ page }) => {
    await expect(page.locator('h1')).toContainText('DropDown Menu');
  });

test('has select country from below text', async ({ page }) => {
    await expect(page.getByRole('strong')).toContainText('Select country from below drop down list:');
  });