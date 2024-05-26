const { test, expect } = require('@playwright/test');

test.beforeEach('should open URL', async ({ page }) => {
    await page.goto('https://www.globalsqa.com/demo-site/select-dropdown-menu/');
  });

test('has title', async ({ page }) => {
    await expect(page).toHaveTitle("DropDown Menu - GlobalSQA");
  });

test('should select United States', async ({ page }) => {
    await page.getByRole('combobox').selectOption('USA');
    await page.waitForTimeout(2000);
  });

test('should select Switzerland', async ({ page }) => {
    await page.getByRole('combobox').selectOption('Switzerland');
    await page.waitForTimeout(2000);
  });