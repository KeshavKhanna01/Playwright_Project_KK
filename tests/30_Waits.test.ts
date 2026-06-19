import {test,expect} from '@playwright/test';

test('auto wait for click', async({page})=>{

    await page.goto('https://playwright.dev/');
    await page.getByRole('link',{name: 'Get started'}).click();// auto/inbuilt wait
    await expect(page.getByRole('heading',{name:/Playwright enables reliable web automation for testing/})).toBeVisible(); //auto wait for assertion

    //---waitForTimeout() 36.⁠ ⁠Waitfortimeout
    // await page.waitForTimeout(5000);// hardcoded waits, used for delays

    //----await for different states : visible,hidden,attached,detached : 35.⁠ ⁠Wait for state: hidden, visible
    // await page.locator('.spinner').waitFor({state:'hidden'});

    //--custom timeout: 33.⁠ ⁠Try wait using custom timeout
   // await page.getByRole('link',{name: 'Get started'}).click({timeout:1000});

    //--noWaitAfter -  37.⁠ ⁠NowaitAfter
   // await page.getByRole('link',{name: 'Get started'}).click({noWaitAfter:true});//moves immediately to the next line of code (helpful when just checking if link is clicked/ after logout)

   // --38.⁠ ⁠Wait with click action and fill action
   // await page.locator('searchInput').fill('dsfsd);

   //34.⁠ ⁠Try wait for load, domcontent loaded

   /*await page.goto('https://playwright.dev/');
   {
        waitUntil:'load'; //htm loaded,css loaded, js loaded, images loaded
        waitUntil: 'domcontentloaded';// only dom loaded

   }*/
   

});