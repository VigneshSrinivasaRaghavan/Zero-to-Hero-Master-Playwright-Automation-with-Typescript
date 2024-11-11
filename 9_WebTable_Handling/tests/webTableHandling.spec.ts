import { expect } from '@playwright/test';
import test from '../dynamic-test';

test('Handling Webtable', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground/table-search-filter-demo');
  const consentAllowButton = page.locator('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection');
  await page.waitForTimeout(5000);
  if (await consentAllowButton.isVisible({ timeout: 10000 })) {
    await consentAllowButton.click();
  }

  const table = page.locator('table#task-table');

  // Total Rows
  const rows = table.locator('tbody tr');

  // Total Columns
  const columns = table.locator('tr th');

  expect(await rows.count()).toEqual(7);
  expect(await columns.count()).toEqual(4);
})

test('Filtering Table by Task/Assignee/Status', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground/table-search-filter-demo');
  const consentAllowButton = page.locator('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection');
  await page.waitForTimeout(5000);
  if (await consentAllowButton.isVisible({ timeout: 10000 })) {
    await consentAllowButton.click();
  }
  
  const table = page.locator('table#task-table');
  const rows = table.locator('tbody tr');
  const columns = table.locator('tr th');
  const nonHiddenRows = table.locator(' tbody tr:not([style*="display: none;"])');


  // Filter by Task
  await page.locator('input#task-table-filter').fill('Content');
  await page.locator('input#task-table-filter').press('Enter');
  expect(await nonHiddenRows.count()).toEqual(1);
  expect(await nonHiddenRows.locator('td:nth-child(2)').textContent()).toEqual('Content');


  // Filter by Task
  await page.locator('input#task-table-filter').clear();
  await page.locator('input#task-table-filter').fill('Halima Werknesh');
  await page.locator('input#task-table-filter').press('Enter');
  expect(await nonHiddenRows.count()).toEqual(1);
  expect(await nonHiddenRows.locator('td:nth-child(3)').textContent()).toEqual('Halima Werknesh');

    // Filter by Status
    await page.locator('input#task-table-filter').clear();
    await page.locator('input#task-table-filter').fill('Failed');
    await page.locator('input#task-table-filter').press('Enter');
    expect(await nonHiddenRows.count()).toEqual(2);
})