import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage';
import loginData from '../../data/login.Data.json';

test.describe('Data-Driven Login Tests', () => {
    for (const data of loginData) {
      test(`login test for ${data.username}`, async ({ page }) => {
        const loginPage = new LoginPage(page);
  
        // Go to login page
        await loginPage.goto();
  
        // Perform login with data from JSON file
        await loginPage.login(data.username, data.password);
  
      });
    }
});