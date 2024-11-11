import { expect } from '@playwright/test';
import test from '../dynamic-test';

test('Simple Alert Handling', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo');
  const consentAllowButton = page.locator('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection');
  if (await consentAllowButton.isVisible({ timeout: 10000 })) {
    await consentAllowButton.click();
  }

page.on('dialog',async(alert)=>{
  const alertMessage = alert.message();
  expect(alertMessage).toEqual('I am an alert box!');
  await alert.accept();
})
await page.locator('(//button[@type="button"])[1]').click();
});

test('Confirm Alert - Ok Button', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo');
  const consentAllowButton = page.locator('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection');
  if (await consentAllowButton.isVisible({ timeout: 10000 })) {
    await consentAllowButton.click();
  }

  page.on('dialog',async(alert)=>{
    const alertMessage = alert.message();
    expect(alertMessage).toEqual('Press a button!');
    await alert.accept();
    await expect(page.locator('#confirm-demo')).toHaveText('You pressed OK!');
  })
  await page.locator('(//button[@type="button"])[2]').click();
});

test('Confirm Alert - Cancel Button', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo');
const consentAllowButton = page.locator('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection');
  if (await consentAllowButton.isVisible({ timeout: 10000 })) {
    await consentAllowButton.click();
  }

  page.on('dialog',async(alert)=>{
    const alertMessage = alert.message();
    expect(alertMessage).toEqual('Press a button!');
    await alert.dismiss();
    await expect(page.locator('#confirm-demo')).toHaveText('You pressed Cancel!');
  })
  await page.locator('(//button[@type="button"])[2]').click();
});

test('Prompt Alert - Ok Button', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo');
const consentAllowButton = page.locator('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection');
  if (await consentAllowButton.isVisible({ timeout: 10000 })) {
    await consentAllowButton.click();
  }

  page.on('dialog',async(alert)=>{
    const alertMessage = alert.message();
    expect(alertMessage).toEqual('Please enter your name');
    await alert.accept("Playwright");
    await expect(page.locator('#prompt-demo')).toHaveText(`You have entered 'Playwright' !`);
  })
  await page.locator('(//button[@type="button"])[3]').click();

});

test('Prompt Alert - Cancel Button', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo');
  const consentAllowButton = page.locator('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection');
  if (await consentAllowButton.isVisible({ timeout: 10000 })) {
    await consentAllowButton.click();
  }

  page.on('dialog',async(alert)=>{
    const alertMessage = alert.message();
    expect(alertMessage).toEqual('Please enter your name');
    await alert.dismiss();
  })
  await page.locator('(//button[@type="button"])[3]').click();
});