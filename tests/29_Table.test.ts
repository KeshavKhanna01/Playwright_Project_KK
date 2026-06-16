import {test,expect} from '@playwright/test';

test('Table', async({page})=>{

    await page.goto('https://selectorshub.com/xpath-practice-page/');

    //select the table
    const userTable = await page.locator('table').filter({hasText:'Username'});

    //select the headers within the table
    const headers = await userTable.locator('thead th').allTextContents();
    //allTextContents -> finds all will return <table> elements with th
    console.log('Headers: ', headers);

    //get all rows data
    const userRows = userTable.locator('tbody tr');
    console.log('Total users: ', await userRows.count());

    //get all username
    const usernames = await userRows.locator('td a').allTextContents();
    console.log('Usernames: ', usernames)

    //get specific user
    const johnUser = await userRows.filter({hasText:'John.Smith'});
    await userRows.filter({hasText:'Kevin.Mathews'}).getByRole('link').click();

});