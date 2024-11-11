import { expect } from '@playwright/test';
import test from '../dynamic-test';

test('Single Tab Handling', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Windows.html');
  await page.locator('button[aria-label="Do not consent"]').click();

  const [newTab] = await Promise.all([
    page.waitForEvent('popup'),
    await page.click('button:has-text("click")')
  ])

  await newTab.waitForLoadState('networkidle');
  await newTab.locator('//span[normalize-space()="Downloads"]').click();
  await newTab.close();
})

test('Multiple Tab Handling', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Windows.html');
  await page.locator('button[aria-label="Do not consent"]').click();
  await page.locator('.analystic[href="#Multiple"]').click();

  const [multipleTab] = await Promise.all([
    page.waitForEvent('popup'),
    await page.click('button[onclick="multiwindow()"]')
  ])

  await multipleTab.waitForLoadState('networkidle');
  const pages = multipleTab.context().pages();

  await pages[1].waitForLoadState('networkidle');
  await pages[1].bringToFront();
  await pages[1].locator('#email').fill('playwright@gmail.com');
  
  await pages[2].waitForLoadState('networkidle');
  await pages[2].bringToFront();
  await pages[2].locator('//span[normalize-space()="Downloads"]').click();
  await pages[1].close();
  await pages[2].close();
})