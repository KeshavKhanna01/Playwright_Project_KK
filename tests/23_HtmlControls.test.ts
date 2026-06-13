import { test, expect } from '@playwright/test';

test('Practice automation form fields', async ({ page }) => {

    await page.goto('https://practice-automation.com/form-fields/');

    await page.getByRole('textbox',{name:'Name'}).fill('John');
    await page.getByRole('textbox',{name:'Password'}).fill('John123');

    await page.getByRole('checkbox', { name: 'Water' }).check();

    // verify water option is really checked
    await expect(page.getByRole('checkbox', { name: 'Water' })).toBeChecked(); // PASS

    await page.getByRole('checkbox', { name: 'Coffee' }).check();

    await page.getByRole('radio', { name: 'Red' }).check();

    await page.getByRole('combobox').selectOption('Yes');

    await page.getByRole('textbox',{name:'Email'}).fill('John12@gmail.com');

    await page.getByRole('textbox',{name:'Message'}).fill('HTML Controls');

    await page.getByRole('button',{name:'Submit'}).click();



    // if need to use loop for selecting multiple checkboxes
    // const drinks = ['Water', 'Coffee', 'Wine'];
    // for(const drink of drinks){
    //     await page.getByRole('checkbox',{name:drink}).check();
    // }

    //13 total count of checkboxes
    const checkBoxes = page.getByRole('checkbox');
    const totalCount = await checkBoxes.count();

    console.log(`Total count of checkbox is: ${totalCount}`);

    for(let i=0;i<totalCount;i++){
       const checkbox = checkBoxes.nth(i);

    // Check the checkbox
    await checkbox.check();

    // Verify it is checked
    await expect(checkbox).toBeChecked();
    }

    //14 : ⁠Print all name of checkbox using for each loop (Don't use number based count here

    const checkBoxes1 = await page.getByRole('checkbox').all();

    for (const checkbox of checkBoxes1) 
    {
    const name = await checkbox.getAttribute('value');
    console.log(name);
    }

});