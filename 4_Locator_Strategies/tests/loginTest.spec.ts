import { test,expect } from '@playwright/test';
// import test from "../lambdatest-setup";

test('LambdaTest Login by using inspector', async ({ page}) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/login');
  await page.pause();
  await page.getByPlaceholder('E-Mail Address').fill('lambdatestforplaywright@gmail.com');
  await page.getByPlaceholder('Password').fill('lambdatestforplaywright');
  await page.getByRole('button', { name: 'Login' }).click();
});

test('LambdaTest Login test by using own locator', async ({ page}) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/login');
  await page.locator('#input-email').fill('lambdatestforplaywright@gmail.com');
  await page.locator('input[name="password"]').fill('lambdatestforplaywright');
  await page.locator('//input[@type="submit"]').click();
});