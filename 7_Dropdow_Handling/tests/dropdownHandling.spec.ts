import { expect } from '@playwright/test';
import test from '../dynamic-test';

test('Single Static DropDown Handling', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground/select-dropdown-demo');
  if (await page.locator('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection').isVisible({ timeout: 5000 })) {
    await page.locator('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection').click();
  }
  await page.selectOption('#select-demo',{value:'Monday'});
  await expect(page.locator('#select-demo')).toHaveValue('Monday');

  await page.selectOption('#select-demo',{label:'Tuesday'});
  await expect(page.locator('#select-demo')).toHaveValue('Tuesday');

  await page.selectOption('#select-demo',{index:4});
  await expect(page.locator('#select-demo')).toHaveValue('Wednesday');

  await page.close();
});

test('Multi Static DropDown Handling', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground/select-dropdown-demo');
  if (await page.locator('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection').isVisible({ timeout: 5000 })) {
    await page.locator('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection').click();
  }

  await page.selectOption('#multi-select',[
    {value:'California'},
    {value:'New Jersey'},
    {value:'New York'}
  ]);
  await expect(page.locator('#multi-select')).toHaveValues(['California','New Jersey', 'New York']);
  await page.close();
});

test('Searchable Dynamic DropDown', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo');
  if (await page.locator('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection').isVisible({ timeout: 5000 })) {
    await page.locator('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection').click();
  }
  await page.locator('(//span[@class="select2-selection select2-selection--single"])[1]').click();
  await page.locator('(//input[@class="select2-search__field"])[2]').fill('India');
  await page.locator('ul#select2-country-results>li').click();
  await expect(page.locator('#select2-country-container')).toHaveText('India');

  await page.close();
});

test('Non Searchable Dynamic DropDown', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo');
  if (await page.locator('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection').isVisible({ timeout: 5000 })) {
    await page.locator('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection').click();
  }

  await page.locator('input[placeholder="Select state(s)"]').click();
  await page.locator('ul.select2-results__options').locator('li',{hasText:'Arizona'}).click();
  await expect(page.locator('.select2-selection__choice')).toHaveAttribute('title', 'Arizona');
  await page.close();
});