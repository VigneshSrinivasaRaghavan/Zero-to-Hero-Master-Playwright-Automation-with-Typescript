import { expect } from '@playwright/test';
import test from '../dynamic-test';

test('Radio button Handling', async ({ page }) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/radiobutton-demo');
    if(await page.locator('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection').isVisible({timeout:5000})){
        await page.locator('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection').click();
    }
    
    const maleRadioButton = page.locator('input[value="Male"][name="optradio"]');
    const femaleRadioButton = page.locator('input[value="Female"][name="optradio"]');

    // Way 1 Assertion
    await expect(maleRadioButton).not.toBeChecked();
    await expect(femaleRadioButton).not.toBeChecked();

    // Way 2 Assertion
    expect(await maleRadioButton.isChecked()).toBeFalsy();
    expect(await femaleRadioButton.isChecked()).toBeFalsy();

    await maleRadioButton.check();
    await expect(maleRadioButton).toBeChecked();

    await femaleRadioButton.check();
    expect(await femaleRadioButton.isChecked()).toBeTruthy();
    
    await page.close();
});