import { test, expect } from '@playwright/test';
import path from 'path';
import fs from 'fs';

test('partial screenshot', async ({ page }) => {

  const screenshotDir = path.join(__dirname, '..', 'screenshots');

  if (!fs.existsSync(screenshotDir)) {
    fs.mkdirSync(screenshotDir, { recursive: true });
  }

  await page.goto('https://conduit.bondaracademy.com/');

  await page.locator('div').filter({ hasText: 'conduitA place to learn and' }).nth(1).screenshot({ path: path.join(screenshotDir, 'header_screenshot.png') });

  await page.getByText('Popular Tags Test Coding').screenshot({ path: path.join(screenshotDir, 'tags_screenshot.png') });
});