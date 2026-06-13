import {test,expect} from '@playwright/test';

//interact with frames
//1.frameLocator(); 
//2.page.frame;
//3.page.frames();

/*test('Frames', async({page})=>{

    await page.goto('https://demoqa.com/frames');
    const frame= page.frameLocator('#frame1'); // frameLocator automatically switches to context : locating the frame
    const headingText = await frame.locator('#sampleHeading').textContent();// element inside frame

    //21.⁠ ⁠Automate frames using playwright and use assertion without variables
    //await expect(frame.locator('#sampleHeading')).toHaveText('This is a sample page');// toHaveText used with locators
   
    //20.⁠ ⁠Automate frames using playwright and use assertion with variables
    await expect(headingText).toContain('This is a sample page');// toContain used with variable
    await expect(headingText).toBe('This is a sample page'); // toContain used with variable


});*/


test('scroll related', async({page})=>{

    await page.goto('https://practice-automation.com/');

    //22.Automate using scrollintoviewifNeeded
  // await page.getByRole('link',{name: 'About'}).scrollIntoViewIfNeeded();// scrollIntoViewIfNeeded is a method, it will scroll till the element is not found 

   // await expect(page.getByRole('link',{name: 'About'})).toBeVisible(); // is also an approach for finsding an element until its visible

   /* Approach B
   const aboutLink = await page.getByText('About');
   aboutLink.scrollIntoViewIfNeeded();
   await expect(aboutLink).toBeVisible(); */

   //Approach C
   //23.⁠ ⁠Automate scroll option using wheel wrt pixels
   //await page.mouse.wheel(0,2000);
   //await page.pause(); to pause

   //24.⁠ ⁠Automate scroll using evaluate method
   await page.evaluate(()=>
    {
        window.scrollTo(0,document.body.scrollHeight); // will scroll to the bottom
    });

     await page.evaluate(()=>
    {
        window.scrollTo(0,0); // will scroll to the top
    });
        await page.pause();

});