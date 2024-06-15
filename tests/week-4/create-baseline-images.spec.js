import { test, expect } from '@playwright/test';
import path from 'path';
import fs from 'fs-extra';

test('capture baseline images', async ({ page }) => {
  const baselineDir = path.join(__dirname, '..', 'baseline');
  await fs.ensureDir(baselineDir);

  await page.goto('https://conduit.bondaracademy.com/');

  // Capture baseline screenshots
  await page.locator('div').filter({ hasText: 'conduitA place to learn and' }).nth(1).screenshot({ path: path.join(baselineDir, 'header_screenshot.png') });
  await page.getByText('Popular Tags Test Coding').screenshot({ path: path.join(baselineDir, 'tags_screenshot.png') });
});
