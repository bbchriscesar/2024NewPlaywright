const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
    await page.route('https://conduit-api.bondaracademy.com/api/tags', async route => {
        const tags = {
            "tags": [
                "New Apprentice",
                "Playwright"
            ]
        }
        await route.fulfill({
            body: JSON.stringify(tags)
        })
    })
    await page.route('https://conduit-api.bondaracademy.com/api/articles?limit=10&offset=0', async route => {
        const response = await route.fetch()
        const responseBody = await response.json()
        responseBody.articles[0].title = "Web & API Tests Combination and Network Mocking"
        responseBody.articles[0].description = "Understanding the importance of API"

        await route.fulfill({
            body: JSON.stringify(responseBody)
        })
    })
    await page.goto('https://conduit.bondaracademy.com/')
})

test('has title', async ({ page }) => {
    await expect(page.locator('.navbar-brand')).toHaveText('conduit');
    await page.pause();
});