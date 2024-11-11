import { expect } from '@playwright/test';
import test from '../dynamic-test';


test('Single Window Handling', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground/window-popup-modal-demo');
  const consentAllowButton = page.locator('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection');
  await page.waitForTimeout(5000);
  if (await consentAllowButton.isVisible({ timeout: 10000 })) {
    await consentAllowButton.click();
  }

  const [newWindow] = await Promise.all([
    page.waitForEvent('popup'),
    await page.click('//a[contains(text(),"Like us On Facebook")]')
  ]);

  await newWindow.waitForLoadState('networkidle');
  await newWindow.locator('(//div[@aria-label="Decline optional cookies"])[1]').click();
  expect(await newWindow.title()).toEqual('LambdaTest | Facebook');
  await newWindow.close();
})


test('Multiple Window Handling', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground/window-popup-modal-demo');
  const consentAllowButton = page.locator('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection');
  await page.waitForTimeout(5000);
  if (await consentAllowButton.isVisible({ timeout: 10000 })) {
    await consentAllowButton.click();
  }

  const [multipleWindow] = await Promise.all([
    page.waitForEvent('popup'),
    await page.click('//*[@id="followboth"]')
  ]);

  await multipleWindow.waitForLoadState('networkidle');
  const pages = multipleWindow.context().pages();

  await pages[1].waitForLoadState('networkidle');
  await pages[2].waitForLoadState('networkidle');

  await pages[1].bringToFront();
  expect(await pages[1].title()).toEqual('LambdaTest | Facebook');

  await pages[2].bringToFront();
  expect(await pages[2].title()).toContain('X');
  
  await pages[1].close();
  await pages[2].close();
})
