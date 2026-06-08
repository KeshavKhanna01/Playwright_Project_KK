import { test, expect } from '@playwright/test';

test('Swag lab login', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');

    await expect(page.getByText("Sauce Labs Backpack",{exact:true})); // if have multiple instances with same locator

    //await expect(page.getByText("Sauce Labs Backpack")).toBeVisible(); // if don't have multiple instances with same locator

    //await expect(page.locator('h2')).toContainText('Produce on Kapuraka'): page.locator is method in Playwright used to locate elements on a web page, toContainText will provide all the instance where h2 heading is having the simillar text
});