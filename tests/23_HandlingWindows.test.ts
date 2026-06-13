import {test,expect} from '@playwright/test';

test('HandlingWindows', async ({page})=>{
    await page.goto('https://the-internet.herokuapp.com/windows');

    const pagePromise = page.context().waitForEvent('page');// playwright listening, if any new tab is opened or not? if so it is ready to go to that page

    await page.getByRole('link',{name: 'Click Here'}).click();

    const newPage = await pagePromise; // context of new tab provided to a variable 

    await expect(newPage).toHaveTitle('New Window');

});