import {test,expect} from '@playwright/test';

//28.⁠ ⁠Automate nested frame in https://demo.automationtesting.in/Frames.html

/*test('⁠Automate nested frame', async({page}) =>{
    await page.goto('https://demo.automationtesting.in/Frames.html');
    await page.getByRole('link',{name:'Iframe with in an Iframe'}).click();
    //switch to outer frame
    const outerFrame= await page.frameLocator('iFrame[src="MultipleFrames.html"]');

    //take reference of outerframe to find the locator of inner frame
    const innerFrame = outerFrame.frameLocator('iFrame[src="SingleFrame.html"]');

    await innerFrame.locator('input[type="text"]').fill('Inner Frame testing');


});*/

//29.⁠ ⁠Automate frames using page.frames and get URL of all frames using for each loop
/*test('Automate frames using page.frames and get URL of all frames using for each loop', async({page}) =>{
     await page.goto('https://demo.automationtesting.in/Frames.html');
    await page.getByRole('link',{name:'Iframe with in an Iframe'}).click();

    const frames = page.frames()
    for(const frame of frames ){
        console.log("Frame as requested: -------" + frame.url());
    }

});*/


//30.⁠ ⁠Automate single frame in website mentioned at line # 28
/*test('⁠Automate single frame', async({page}) =>{
 await page.goto('https://demo.automationtesting.in/Frames.html');
 const frame = await page.frameLocator('iFrame[src="SingleFrame.html"]')
 const inputInFrame = await frame.locator('input[type="text"]').fill('Testing Single Frame');
    
});*/

//31.⁠ ⁠Automate assignment # 28 (⁠Automate nested frame) using page.frames
/*test('⁠Automate nested frames using frames', async({page}) =>{
    await page.goto('https://demo.automationtesting.in/Frames.html');
    await page.getByRole('link',{name:'Iframe with in an Iframe'}).click();
    //store all frames in a page
    const allFrames = page.frames();
    //choose specific frame on which you want to perform action
    const specificFrame= allFrames.find(frame=>frame.url().includes('SingleFrame.html'));

    //select the element
    await specificFrame!.locator('input[type="text"]').fill('Inner Frame testing'); // to tell typescript that specificFrame is not undefined, as find() can return undefined



});*/

//32.⁠ ⁠Automate Shadow DOM using playwright
test('⁠⁠Automate Shadow DOM', async({page}) =>{
    await page.goto('https://selectorshub.com/xpath-practice-page/');

    await page.locator('#pizza').fill('FarmHouse');

});