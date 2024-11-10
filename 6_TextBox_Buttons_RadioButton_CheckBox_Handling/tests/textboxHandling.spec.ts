import {expect} from '@playwright/test'
import test from '../dynamic-test';


test('Fill Method',async({page})=>{
    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/login');
    await page.locator('#input-email').fill('lambdatestforplaywright@gmail.com');
    await page.locator('#input-password').fill('lambdatestforplaywright');
    await page.locator('#input-password').press('Enter');
    await expect(page.locator('#main-navigation')).toBeVisible();
    await page.close();
})

test('Press - Sequentially method with Delay',async({page})=>{
    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/login');
    await page.locator('#input-email').pressSequentially('lambdatestforplaywright@gmail.com',{delay:200});
    await page.locator('#input-password').pressSequentially('lambdatestforplaywright',{delay:200});
    await page.locator('#input-password').press('Enter');
    await expect(page.locator('#main-navigation')).toBeVisible();
    await page.close();
})