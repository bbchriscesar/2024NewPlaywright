class ResponsivePage {
    constructor(page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto('https://conduit.bondaracademy.com/');
    }

    async checkResponsiveLayout() {
        return await this.page.title();
    }
}

export { ResponsivePage };