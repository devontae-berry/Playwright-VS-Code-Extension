import { test, expect } from '../../fixtures/auth';

test('Calendar View and Event Creation', async ({ page }) => {
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
    await expect(page.getByRole('button', { name: 'Calendar' })).toBeVisible();
    await page.getByRole('button', { name: 'Calendar' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Week' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Day', exact: true }).click();
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Agenda' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Back to Calendar' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Month' }).click();
    await page.waitForTimeout(500);
    const page2Promise = page.waitForEvent('popup');
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'New Event' }).click();
    await page.waitForTimeout(1000);
    const page2 = await page2Promise;
    await page.waitForTimeout(1000);
    await page2.getByRole('textbox', { name: 'Team Meeting, Client Call,' }).click();
    await page2.getByRole('textbox', { name: 'Team Meeting, Client Call,' }).fill('Work Shift');
    await expect(page2.getByRole('textbox', { name: 'Team Meeting, Client Call,' }))
        .toHaveValue('Work Shift');
    await page.waitForTimeout(500);
    await page2.getByRole('textbox', { name: 'Add details about the event...' }).click();
    await page2.getByRole('textbox', { name: 'Add details about the event...' }).fill('My next work shift');
    await expect(page2.getByRole('textbox', { name: 'Add details about the event...' }))
        .toHaveValue('My next work shift');
    await page.waitForTimeout(500);
    await page2.getByRole('textbox').nth(2).fill('2025-11-18');
    await page.waitForTimeout(500);
    await page2.getByRole('textbox').nth(3).click();
    await page2.getByRole('textbox').nth(3).fill('08:30');
    await page.waitForTimeout(500);
    await page2.getByRole('textbox').nth(4).fill('2025-11-18');
    await page.waitForTimeout(500);
    await page2.getByRole('textbox').nth(5).click();
    await page2.getByRole('textbox').nth(5).fill('12:30');
    await page.waitForTimeout(500);
    await page2.getByRole('textbox', { name: 'Conference Room A' }).click();
    await page2.getByRole('textbox', { name: 'Conference Room A' }).fill('Kennard Hall');
    await expect(page2.getByRole('textbox', { name: 'Conference Room A' }))
        .toHaveValue('Kennard Hall');
        await page.waitForTimeout(500);
    await page2.getByRole('button', { name: 'Create Event' }).click();
    await expect(page.locator('div').filter({ hasText: /^Work ShiftKennard Hall$/ }).nth(1))
        .toBeVisible();
    await page.waitForTimeout(500);
    await page.locator('div').filter({ hasText: /^Work ShiftKennard Hall$/ }).nth(1).click();
    await page.pause();
});