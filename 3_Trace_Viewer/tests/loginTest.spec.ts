import { expect } from '@playwright/test';
import test from "../lambdatest-setup";

test('LambdaTest Login Test', async ({ page,context }) => {
  await context.tracing.start({snapshots:true, screenshots:true});

  await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/login');
  await page.getByPlaceholder('E-Mail Address').click();
  await page.getByPlaceholder('E-Mail Address').fill('lambdatestforplaywright@gmail.com');
  await page.getByPlaceholder('PasswordVignesh').click();
  await page.getByPlaceholder('Password').fill('lambdatestforplaywright');
  await page.getByRole('button', { name: 'Login' }).click();

  await context.tracing.stop({path: 'test1_trace.zip'})
});