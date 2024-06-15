class ProfilePage {
    constructor(page) {
        this.page = page;
        this.usernameDisplay = page.locator('app-layout-header').getByRole('link', { name: 'gomavs' });
        this.profileLink = page.locator('app-layout-header').getByRole('link', { name: 'gomavs' });
        this.editProfileSettings = page.getByRole('link', { name: ' Edit Profile Settings' });
        
    }

    async getUsername() {
        return await this.usernameDisplay.textContent();
    }

    async gotoProfile() {
        await this.profileLink.click();
    }

    async gotoSettings() {
        await this.editProfileSettings.click();
    }
}

export { ProfilePage };