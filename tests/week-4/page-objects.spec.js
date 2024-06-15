import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage';
import { HomePage } from '../../pages/homePage';
import { ProfilePage} from '../../pages/profilePage';

test('page object sample application', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    const profilePage = new ProfilePage(page);

    await loginPage.goto();
    await loginPage.login('cesar.christianne@gmail.com', 'NewApprentice')
    
    await expect(page.locator('app-layout-header')).toContainText('New Article');

    await profilePage.getUsername();
    await profilePage.gotoProfile();
    await profilePage.gotoSettings();

    await homePage.gotoHome();

  });