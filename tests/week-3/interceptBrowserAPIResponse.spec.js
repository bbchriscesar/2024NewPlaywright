const { test, expect } = require('@playwright/test');

test('Create an article', async ({ page, request }) => {
    await page.goto('https://conduit.bondaracademy.com/');
    await page.getByRole('link', { name: 'Sign in' }).click();
    await page.getByPlaceholder('Email').fill('cesar.christianne@gmail.com');
    await page.getByPlaceholder('Password').fill('NewApprentice');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('link', { name: '  New Article' }).click();
    await page.getByPlaceholder('Article Title').click();
    await page.getByPlaceholder('Article Title').fill('Playwright is awesome');
    await page.getByPlaceholder('What\'s this article about?').click();
    await page.getByPlaceholder('What\'s this article about?').fill('About the Playwright');
    await page.getByPlaceholder('Write your article (in').click();
    await page.getByPlaceholder('Write your article (in').fill('We like to use Playwright for automation');
    await page.getByRole('button', { name: 'Publish Article' }).click();

    const articleResponse = await page.waitForResponse('https://conduit-api.bondaracademy.com/api/articles/')
    const articleResponseBody = await articleResponse.json()
    const slugId = articleResponseBody.article.slug

    await expect(page.getByRole('heading')).toContainText('Playwright is awesome');
    await page.getByRole('link', { name: 'Home' }).click();
    await expect(page.locator('app-article-list')).toContainText('Playwright is awesome');

    const response = await request.post('https://conduit-api.bondaracademy.com/api/users/login', {
        data: {
            "user":{"email":"cesar.christianne@gmail.com","password":"NewApprentice"}
        }
    })
    const responseBody = await response.json()
    const accessToken = responseBody.user.token

    const deleteArticleResponse = await request.delete(`https://conduit-api.bondaracademy.com/api/articles/${slugId}`, {
        headers: {
            Authorization: `Token ${accessToken}`
        }
    })
    expect(deleteArticleResponse.status()).toEqual(204)
  });