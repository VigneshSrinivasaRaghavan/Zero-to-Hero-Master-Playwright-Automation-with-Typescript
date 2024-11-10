import { expect } from '@playwright/test';
import test from '../dynamic-test';

test('Checkbox button Handling', async ({ page }) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/checkbox-demo');
    if (await page.locator('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection').isVisible({ timeout: 5000 })) {
        await page.locator('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection').click();
    }
    
    const checkbox1 = page.locator('#ex1-check1');
    const checkbox2 = page.locator('#ex1-check2');
    const checkbox3 = page.locator('(//input[@id="ex1-check3"])[1]');

    // Way 1 Assert
    expect(checkbox1).not.toBeChecked();
    expect(checkbox2).not.toBeChecked();
    expect(checkbox3).not.toBeChecked();

    // Way 2 Assert
    expect(await checkbox1.isChecked()).toBeFalsy();
    expect(await checkbox2.isChecked()).toBeFalsy();
    expect(await checkbox3.isChecked()).toBeFalsy();

    await checkbox1.check();
    await checkbox2.check();
    await checkbox3.check();

    expect(checkbox1).toBeChecked();
    expect(checkbox2).toBeChecked();
    expect(await checkbox3.isChecked()).toBeTruthy();

    await page.close();
});
