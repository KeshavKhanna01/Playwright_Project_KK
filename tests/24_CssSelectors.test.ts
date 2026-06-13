/*
===============================================================================
CSS SELECTORS IN PLAYWRIGHT
===============================================================================

What is a CSS Selector?

CSS Selector is a locator used to identify web elements.

Common actions:
- Click
- Fill text
- Check checkbox
- Get text
- Verify visibility

CSS Selector = Address of an element inside the DOM


1. ID Selector
-------------------------------------------------------------------------------

HTML:
<input id="user-name">

CSS Syntax:
#user-name

Playwright:
await page.locator('#user-name').fill('standard_user');


2. Class Selector
-------------------------------------------------------------------------------

HTML:
<div class="error-message-container error">

CSS Syntax:
.classname

Single Class:
await page.locator('.error-message-container');

Multiple Classes:
await expect(
    page.locator('.error-message-container.error')
).toHaveText('do not match');


3. Tag Name Selector
-------------------------------------------------------------------------------

HTML:
<button id="login-button">

CSS Syntax:
button

Playwright:
await page.locator('button').click();

const count = await page.locator('button').count();
console.log(count);


4. Attribute Selector
-------------------------------------------------------------------------------

HTML:
<input placeholder="Username">

CSS Syntax:
[placeholder="Username"]

Playwright:
await page
    .locator('[placeholder="Username"]')
    .fill('standard_user');


5. Parent > Child Selector
-------------------------------------------------------------------------------

HTML:
<div class="inventory_item">
    <div class="inventory_item_name">
        Sauce Labs Backpack
    </div>
</div>

CSS Syntax:
.inventory_item > .inventory_item_name

Playwright:
await page
    .locator('.inventory_item > .inventory_item_name')
    .textContent();


6. Descendant Selector
-------------------------------------------------------------------------------

HTML:
<div class="inventory_item">
    <div>
        <div class="inventory_item_name">
            Sauce Labs Backpack
        </div>
    </div>
</div>

CSS Syntax:
.inventory_item .inventory_item_name

Playwright:
await page
    .locator('.inventory_item .inventory_item_name')
    .textContent();


7. Attribute Starts With (^=)
-------------------------------------------------------------------------------

HTML:
<input id="user-name">

CSS Syntax:
[id^="user"]

Playwright:
await page.locator('[id^="user"]').fill('stdusr');


8. Attribute Ends With ($=)
-------------------------------------------------------------------------------

HTML:
<input id="user-name">

CSS Syntax:
[id$="name"]

Playwright:
await page.locator('[id$="name"]').fill('stdusr');


9. Attribute Contains (*=)
-------------------------------------------------------------------------------

HTML:
<input id="my-user-name">

CSS Syntax:
[id*="user"]

Playwright:
await page.locator('[id*="user"]').fill('stdusr');

===============================================================================
*/


// 15- Automate Swag Labs website using CSS selector ( Login screen)
import {test,expect} from '@playwright/test';

// test('login with css selector', async({page})=>{

//     await page.goto('https://www.saucedemo.com/');
//     await page.locator('#user-name').fill('standard_user');
//     await page.locator('#password').fill('secret_sauce');
//     await page.locator('#login-button').click();

//     await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();

// });

// 16 - Automate selectorshub.com/xpath-practice-page/ using CSS selector
/*test('⁠Automate selectorshub using CSS selector',async({page})=>{

    await page.goto('https://selectorshub.com/xpath-practice-page/');

    await page.locator('[placeholder="Enter email"]').click();
    await page.locator('[placeholder="Enter email"]').fill('John');

    await page.locator('[placeholder="Enter Password"]').click();
    await page.locator('[placeholder="Enter Password"]').fill('John123');

    await page.locator('.element-companyId input[name="company"]').click()
    await page.locator('.element-companyId input[name="company"]').fill('Google');

    await page.locator('.element-companyId input[name="mobile number"]').click()
    await page.locator('.element-companyId input[name="mobile number"]').fill('4284239');

    
    await page.locator('.element-companyId input[type="text"]:first-child').click()
    await page.locator('.element-companyId input[type="text"]:first-child').fill('India');

    await page.locator('button[value="Submit"]').click();

});*/

// 17-18 Automate Swag Labs using starts with css type locator

/*test('Starts with/ ends with locator', async({page})=>{

    await page.goto('https://www.saucedemo.com/');
    await page.locator('[id^=user]').fill('standard_user');
    await page.locator('[id=password]').fill('secret_sauce');
    await page.locator('[id$=button]').click


});*/

//19 Login to swag labs website and get text for the Sauce Labs Backpack product using parent child css selector
test('Starts with/ ends with locator', async({page})=>{

    await page.goto('https://www.saucedemo.com/');
    await page.locator('[id^=user]').fill('standard_user');
    await page.locator('[id=password]').fill('secret_sauce');
    await page.locator('[id$=button]').click();
    await expect(page.locator('#item_4_title_link > .inventory_item_name')).toHaveText('Sauce Labs Backpack');


});