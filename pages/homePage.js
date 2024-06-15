class HomePage {
    constructor(page) {
        this.page = page;
        this.homeLink = page.getByRole('link', { name: 'Home', exact: true });
        this.signinLink = page.getByRole('link', { name: 'Sign in' });
        this.signupLink = page.getByRole('link', { name: 'Sign up' });
    }

    async gotoHome() {
        await this.homeLink.click();
    }

    async gotoSignin() {
        await this.signinLink.click();
    }

    async gotoSignup() {
        await this.signupLink.click();
    }
}

export { HomePage };