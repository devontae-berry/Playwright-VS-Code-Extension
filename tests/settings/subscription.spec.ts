// import { test, expect } from '../../fixtures/auth';
// import { goToSettings } from '../../helpers/navigation';
// import { settingsPage } from '../../helpers/selectors';

// test('Subscription & Usage loads', async ({ pageAuthenticated }) => {
//   await goToSettings(pageAuthenticated);
//   await pageAuthenticated.click(settingsPage.subscriptionUsage);
//   await expect(pageAuthenticated.getByText('Subscription')).toBeVisible();
// });

import { test, expect } from '../../fixtures/auth';

test('Observing Subscriptions and Usage w/ Refresh', async ({ page }) => {
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
    await page.getByRole('button', { name: 'Usage' }).click();
    await page.getByText('Subscription and Usage');
    await page.waitForTimeout(1500);
    await page.getByRole('button', { name: 'Refresh' }).click();
    await page.waitForTimeout(1000);
    await page.pause();
});