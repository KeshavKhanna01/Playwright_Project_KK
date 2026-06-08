//Assignment 1: ⁠Write a code on automation of checkbox control on demoqa.com/checkbox website and add assertions

import { test, expect } from '@playwright/test';

test('Checkbox Control', async ({ page }) => {

    await page.goto('https://demoqa.com/');
    
    await page.getByRole('heading', { name: 'Elements' }).click();
    
    await page.getByRole('link', { name: 'Check Box' }).click();
    
    await page.getByRole('checkbox', {
        name: 'Select Home',
        exact: false
    }).click();

    await expect(page.getByText('downloads')).toBeVisible();

});



//Assignment 2-3: ⁠Automate Swag Labs Login Page using getbyplaceholder locator and Automate Swag Labs Login and check the product name using getByText placeholder
test('Swag lab login', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');

    await expect(page.getByText("Sauce Labs Backpack",{exact:true}));
});



//Assignment 4: Fill fields in kapruka.com create account page
test('Fill fields in Kapruka website', async({page})=>{

    await page.goto("https://www.kapruka.com");
    await page.locator('[aria-label="Login to Your Account"]').click();
    await page.getByRole('button',{name:'Create Account'}).click();
    await page.locator('[name="firstName"]').fill('John');
    await page.locator('[name="lastName"]').fill('Smith');
    await page.locator('[name="email"]').fill('test1212@gmail.com');
    await page.locator('[name="password"]').fill('123');
    await page.locator('[name="passwordReConfirm"]').fill('12');
    await page.getByRole('button',{name:'CREATE ACCOUNT'}).click();


});

