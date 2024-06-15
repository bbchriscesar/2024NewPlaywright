import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage';
import loginData from '../../data/login.Data.json';

test.describe('Data-Driven Login Tests', () => {

    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
      });
      
    for (const data of loginData) {
      test(`login test for ${data.username}`, async ({ page }) => {
        const loginPage = new LoginPage(page);
  
        await loginPage.login(data.username, data.password);
  
      });
    }

    test.afterEach(async ({ page }) => {
        // Add any cleanup steps if needed
        await page.close();
      });
});