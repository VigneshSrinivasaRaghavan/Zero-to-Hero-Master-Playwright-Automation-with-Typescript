import { expect } from '@playwright/test';
import test from '../dynamic-test';

test('Frame Handling Using Page.FrameLocator()', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground/iframe-demo/');
  const consentAllowButton = page.locator('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection');
  await page.waitForTimeout(5000);
  if (await consentAllowButton.isVisible({ timeout: 10000 })) {
    await consentAllowButton.click();
  }
  const frame = page.frameLocator('#iFrame1');
  await frame?.locator('div.rsw-ce').fill('LambdaTest');
  expect(await frame?.locator('div.rsw-ce').textContent()).toEqual('LambdaTest');
})

test('Frame Handling Using Page.Frame()', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground/iframe-demo/');
  const consentAllowButton = page.locator('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection');
  await page.waitForTimeout(5000);
  if (await consentAllowButton.isVisible({ timeout: 10000 })) {
    await consentAllowButton.click();
  }

  const frame = page.frame({url:'https://www.lambdatest.com/selenium-playground/iframe-demo/contant'});
  await frame?.locator('div.rsw-ce').fill('LambdaTest');
  expect(await frame?.locator('div.rsw-ce').textContent()).toEqual('LambdaTest');
})

test('Nested Frame Handling', async ({ page }) => {
  await page.goto('https://ui.vision/demo/webtest/frames/');
  const frame3 = page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'});
  const childFrames = frame3?.childFrames();  
  await childFrames[0].locator('div[aria-label="Web Testing"]').check({force:true});
})

