const { test, expect } = require('@playwright/test');

test('should allow selecting multiple checkboxes', async ({ page }) => {

    await page.goto('http://www.tizag.com/htmlT/htmlcheckboxes.php');

    await page.locator('.display > input').first().check();

    await page.locator('input:nth-child(8)').first().check();

    await page.waitForTimeout(2000);
  });

test('should allow selecting a radio button', async ({ page }) => {

    await page.goto('http://www.tizag.com/htmlT/htmlradio.php');

    await page.locator('.display > input:nth-child(4)').first().check();

    await page.waitForTimeout(2000);
  });