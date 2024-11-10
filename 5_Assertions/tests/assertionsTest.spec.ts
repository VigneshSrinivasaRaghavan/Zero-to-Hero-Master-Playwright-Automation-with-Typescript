import { test,expect } from '@playwright/test';
// import test from "../lambdatest-setup";

test('Visible/Hidden Assertion',async({page})=>{
    await page.goto('https://www.letskodeit.com/practice');
    await expect(page.locator('#displayed-text')).toBeVisible();
    await page.locator('#hide-textbox').click();
    await expect(page.locator('#displayed-text')).not.toBeVisible();
    await expect(page.locator('#displayed-text')).toBeHidden();
    await page.close();
})

test('Present/Not Present Assertion',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/add_remove_elements/');
    await expect(page.locator('.added-manually')).not.toHaveCount(1);
    await page.locator('button[onclick="addElement()"]').click();
    await page.locator('button[onclick="addElement()"]').click();
    await expect(page.locator('.added-manually')).toHaveCount(2);
    await page.locator('//div[@id="elements"]//button[1]').click();
    await expect(page.locator('.added-manually')).toHaveCount(1);
    await page.close();
})

test('Enabled/Disabled Assertion',async({page})=>{
    await page.goto('https://letcode.in/buttons');
    await expect(page.locator('#property')).toBeEnabled();
    await expect(page.locator('[title="Disabled button"]')).toBeDisabled();
    await page.close();
})

test('Text Match/Mismatch Assertion',async({page})=>{
    await page.goto('https://letcode.in/buttons');
    await expect(page.locator('[id="color"]')).toHaveText('What is my color?');
    await expect(page.locator('[id="color"]')).not.toHaveText('abcd');
    await page.close();
})

test('Attribute Assertion',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com');
    await expect(page.locator('input[placeholder="Username"]')).toHaveAttribute('name','username');
    await expect(page.locator('input[placeholder="Username"]')).toHaveAttribute('placeholder','Username');
    await expect(page.locator('input[placeholder="Username"]')).toHaveAttribute('class',/.*oxd-input/);
    await page.close();
})

test('URL Assertion',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com');
    //Full URL Assertion
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    //Partial URL Assertion
    await expect(page).toHaveURL(/demo.orangehrmlive/);
    await page.close();
})

test('Title Assertion',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com');

    //Full Title Assertion
    await expect(page).toHaveTitle('OrangeHRM');

    //Partial URL Assertion
    await expect(page).toHaveTitle(/.*HRM/);
    await page.close();
})

test.only('Screenshot Assertion',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com');
    await page.locator('input[placeholder="Username"]').fill('emaild');
    await expect(page).toHaveScreenshot();
    await page.close();
})