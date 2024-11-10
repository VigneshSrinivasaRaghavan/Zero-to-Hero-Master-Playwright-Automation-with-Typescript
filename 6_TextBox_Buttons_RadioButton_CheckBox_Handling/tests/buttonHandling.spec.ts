import { expect } from '@playwright/test';
import test from '../dynamic-test';

test('Regular Button single click', async ({ page }) => {
  await page.goto('https://play1.automationcamp.ir/mouse_events.html');
  await page.locator('#click_area').click();
  await expect(page.locator('#click_type')).toHaveText('Click');
});

test('Double Click', async ({ page }) => {
  await page.goto('https://play1.automationcamp.ir/mouse_events.html');
  await page.locator('#click_area').dblclick();
  await expect(page.locator('#click_type')).toHaveText('Double-Click');
});

test('Right Click', async ({ page }) => {
  await page.goto('https://play1.automationcamp.ir/mouse_events.html');
  await page.locator('#click_area').click({button:'right'});
  await expect(page.locator('#click_type')).toHaveText('Right-Click');
});