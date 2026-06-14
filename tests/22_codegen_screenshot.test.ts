// Codegen command - powerful utility open a new browser window and record user interacction
// POC (Proof of concept) - codegen command
// develop the code (recording ) - save the script - run it
// command to run : npx playwright codegen https://www.google.com
// 1. launch the command
// 2. perform the scenario
// 3. stop the recording
// 4. copy the generated code
// 5. run the script as it is / update the locators and then you can run
//Advantages: 
// 1. identification of Locators
// 2. Language simplified/Agnostic - TS, JS, Python, C#
// 3. POC

// screenshot
import {test, expect} from '@playwright/test';

test("types of ss", async({page}) =>{

    await page.goto('https://playwright.dev');
    await page.screenshot({path: 'screenshots/basic.png'});
    await page.screenshot({path: 'screenshots/fullPage.png', fullPage:true});// full page screenshot
    await page.screenshot({path: 'screenshots/jpg.png', type: 'jpeg', quality:80});// to capture jpeg format screenshots, 0-100 is the quality of image
    await page.screenshot({path: 'screenshots/clipped.png', clip: {x:0, y:0, height:600, width: 800}});// clipped screenshot
    // await page.screenshot({path:'screenshots/ommited.png', omitBackground:true}); // omitted background


});