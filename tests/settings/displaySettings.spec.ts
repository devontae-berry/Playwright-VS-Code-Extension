import { test, expect } from '../../fixtures/auth';

test('GrabDocs Display Settings: Theme Preference and Timezone', async ({ page }) => {
    await page.goto(process.env.BASE_URL || '');
    await expect(page).toHaveTitle(/GrabDocs/i);
    await page.getByRole('link', { name: 'Sign In' }).click();
    await expect(page).toHaveURL(/login/i);
    await page.getByRole('textbox', { name: 'Username, Email or Phone' }).fill(process.env.GRABDOCS_USER || '');
    await expect(page.getByRole('textbox', { name: 'Username, Email or Phone' }))
        .toHaveValue(process.env.GRABDOCS_USER || '');
    await page.getByRole('textbox', { name: 'Password' }).fill(process.env.GRABDOCS_PASS || '');
    await expect(page.getByRole('textbox', { name: 'Password' }))
        .not.toHaveValue('');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await expect(page.getByRole('textbox', { name: 'Enter 6-digit code' }))
        .toBeVisible();
    await page.getByRole('textbox', { name: 'Enter 6-digit code' }).fill(process.env.AUTH_CODE || '');
    await expect(page.getByRole('textbox', { name: 'Enter 6-digit code' }))
        .toHaveValue(process.env.AUTH_CODE || '');
    await page.getByRole('button', { name: 'Verify Code' }).click();
    await expect(page).toHaveURL('https://app.grabdocs.com/upload');
    await page.getByRole('button', { name: 'DB' }).click();
    await page.getByRole('link', { name: 'Settings' }).click();
    await page.getByRole('button', { name: 'Display' }).click();
    await page.getByRole('combobox').first().selectOption('dark');
    await expect(page.getByRole('combobox').first()).toHaveValue('dark');
    await page.waitForTimeout(500);
    await page.getByRole('combobox').first().selectOption('system');
    await expect(page.getByRole('combobox').first()).toHaveValue('system');
    await page.waitForTimeout(1000);
    await expect(page.getByRole('button', { name: 'Use Detected Timezone' })).toBeVisible();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Use Detected Timezone' }).dblclick();
    await expect(page.getByRole('combobox').nth(1)).toBeVisible();
    await page.waitForTimeout(1000);
    await page.getByRole('combobox').nth(1).selectOption('UTC');
    await expect(page.getByRole('combobox').nth(1)).toHaveValue('UTC');
    await page.pause();
});