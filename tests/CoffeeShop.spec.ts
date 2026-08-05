import { test, expect } from '@playwright/test';

test('Verify the total price once buy one coffee', async ({ page }) => {
  await page.goto('https://seleniumbase.io/coffee/');
  await page.locator('[data-test="Cafe_Latte"]').click();
  await page.getByRole('link', { name: 'Cart page' }).click();
  await expect(page.locator('[data-test="checkout"]')).toBeVisible();
  await expect(page.locator('[data-test="checkout"]')).toContainText('Total: $16.00');
  await page.screenshot({ path: 'Verify the total price once buy one coffee.png' });
});

test('Verify the total price once buy three coffee', async ({ page }) => {
  await page.goto('https://seleniumbase.io/coffee/');
  await page.locator('[data-test="Mocha"]').click();
  await page.locator('[data-test="Flat_White"]').click();
  await page.locator('[data-test="Cappuccino"]').click();
  await page.getByRole('button', { name: 'Yes, of course!' }).click();
  await page.getByRole('link', { name: 'Cart page' }).click();
  await expect(page.locator('[data-test="checkout"]')).toBeVisible();
  await expect(page.locator('[data-test="checkout"]')).toContainText('Total: $49.00');
  await page.screenshot({ path: 'Verify the total price once buy three coffee.png' });
});


test('Verify the total price once buy the same kind of coffee 2 unit', async ({ page }) => {
  await page.goto('https://seleniumbase.io/coffee/');
  await page.locator('[data-test="Cappuccino"]').click();
  await page.getByRole('listitem').filter({ hasText: 'cart (1)' }).click();
  await page.getByRole('button', { name: 'Add one Cappuccino' }).click();
  await expect(page.locator('[data-test="checkout"]')).toBeVisible();
  await expect(page.locator('[data-test="checkout"]')).toContainText('Total: $38.00');
  await page.screenshot({ path: 'Verify the total price once buy the same kind of coffee 2 unit.png' });
});


