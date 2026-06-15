import {test,expect} from '@playwright/test';

//25.⁠ ⁠Count number of product on Swag Labs website after Login

test('Count number of product on Swag Labs website after Login',async({page})=>{

    const productName = ['Sauce Labs Backpack', 'Sauce Labs Bike Light', 'Sauce Labs Bolt T-Shirt', 'Sauce Labs Fleece Jacket', 'Sauce Labs Fleece Jacket', 'Test.allTheThings() T-Shirt (Red)'];
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    const countElement = await page.locator('.inventory_item_name ').count();
    console.log(`Total products present on the page are: ${countElement}`);

});

//26.⁠ ⁠Verify all 6 product names in a loop

test('⁠Verify all 6 product names in a loop',async({page})=>{
    const productName = ['Sauce Labs Backpack', 'Sauce Labs Bike Light', 'Sauce Labs Bolt T-Shirt', 'Sauce Labs Fleece Jacket', 'Sauce Labs Fleece Jacket', 'Test.allTheThings() T-Shirt (Red)'];
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();
    for (const product of productName) {
    await expect(
       page.locator('.inventory_item_name').filter({ hasText: product })).toHaveCount(1);
        // filter({ hasText: product }) narrows down all matching elements to only 1 that contains text
    }

     //print all the values 
    // const products = await page.locator('.inventory_item_name').allTextContents();

    // for(const product of products){
    //     console.log(product);
    // }
    });

   

//27.⁠ ⁠Verify the price and name of each product in a loop

test('⁠⁠Verify the price and name of each product in a loop',async({page})=>{

    const expectedProducts = [
    { name: 'Sauce Labs Backpack', price: '$29.99' },
    { name: 'Sauce Labs Bike Light', price: '$9.99' },
    { name: 'Sauce Labs Bolt T-Shirt', price: '$15.99' },
    { name: 'Sauce Labs Fleece Jacket', price: '$49.99' },
    { name: 'Sauce Labs Onesie', price: '$7.99' },
    { name: 'Test.allTheThings() T-Shirt (Red)', price: '$15.99' }
];

    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    const products = page.locator('.inventory_item');
    const count = await products.count();

    for(let i=0;i<expectedProducts.length;i++){


        // Select the i-th product, find its name element with(locator('.inventory_item_name')), and retrieve its text.
        const actualName = await products.nth(i).locator('.inventory_item_name').textContent();


        // Select the i-th product, find its price element with(locator('.inventory_item_price')), and retrieve its text.
        const actualPrice = await products.nth(i).locator('.inventory_item_price').textContent();

        expect(actualName).toBe(expectedProducts[i].name);
        expect(actualPrice).toBe(expectedProducts[i].price);

        console.log(`Verefied products ${actualName} -> ${actualPrice}`);

    }

    });


