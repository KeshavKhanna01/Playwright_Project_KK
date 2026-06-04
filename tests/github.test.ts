import { test, expect } from '@playwright/test';

test('Github login screen with getByRole', async ({ page }) => {
    await page.goto('https://github.com/login');

    await page.getByRole('textbox', {name: 'Username or email address'}).fill('test@example.com');

    await page.getByRole('textbox',{name: "Password"}).fill('123456');

    await page.getByRole('button', { name: 'Sign in',exact:true}).click();
});

test('Github login screen with getByLable', async({page})=>{
    await page.goto('https://github.com/login');
     await page.getByLabel("Username or email address").fill('test2@example.com');
     await page.getByLabel("Password").fill('testcom');
     await page.getByRole('button', { name: 'Sign in',exact:true}).click();

});