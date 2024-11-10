import { expect } from '@playwright/test';
import test from "../lambdatest-setup";

test('test', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/login');
  await page.getByPlaceholder('E-Mail Address').click();
  await page.getByPlaceholder('E-Mail Address').fill('lambdatestforplaywright@gmail.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('lambdatestforplaywright');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Home' }).click();
  await page.getByRole('textbox', { name: 'Search For Products' }).click();
  await page.getByRole('textbox', { name: 'Search For Products' }).click();
  await page.getByRole('textbox', { name: 'Search For Products' }).fill('iphone 15');
  await page.getByRole('textbox', { name: 'Search For Products' }).press('Enter');
  await page.getByRole('button', { name: 'Search' }).click();
});