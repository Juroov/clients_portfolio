import { test, expect } from '@playwright/test';

test.describe('Clients Portfolio QA', () => {
  test('should load without console errors and display key sections', async ({ page }) => {
    const errors: Error[] = [];
    
    // Listen for unhandled errors
    page.on('pageerror', (err) => {
      errors.push(err);
    });

    // Listen for console errors
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        errors.push(new Error(`Console Error: ${msg.text()}`));
      }
    });

    // Navigate to the home page
    const response = await page.goto('/');
    
    // Check if the page loaded successfully
    expect(response?.ok()).toBeTruthy();

    // Check that there are no console/page errors
    expect(errors.length).toBe(0);

    // Verify key sections are visible
    await expect(page.locator('#home')).toBeVisible();
    await expect(page.locator('#about')).toBeVisible();
    await expect(page.locator('#services')).toBeVisible();
    await expect(page.locator('#process')).toBeVisible();
    await expect(page.locator('#why')).toBeVisible();
    
    // Check main call to action
    const startPlanLink = page.locator('a[href="#start-plan"]').first();
    await expect(startPlanLink).toBeVisible();
  });
});
