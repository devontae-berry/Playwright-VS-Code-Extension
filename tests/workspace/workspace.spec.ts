import { test, expect } from '../../fixtures/auth';

test('Creating a Workspace in GrabDocs', async ({ page }) => {
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
  await page.getByRole('button', { name: 'Workspace' }).click();
  await expect(page).toHaveURL('https://app.grabdocs.com/workspaces');
  await page.getByRole('button', { name: 'Create Workspace' }).click();
  await expect(page.getByRole('textbox', { name: 'Enter workspace name' }))
    .toBeVisible();
  await page.getByRole('textbox', { name: 'Enter workspace name' }).click();
  await page.getByRole('textbox', { name: 'Enter workspace name' }).fill('My Workspace');
  await expect(page.getByRole('textbox', { name: 'Enter workspace name' }))
    .toHaveValue('My Workspace');
  await page.getByRole('textbox', { name: 'Enter workspace description' }).click();
  await page.getByRole('textbox', { name: 'Enter workspace description' }).fill('My new workspace');
  await expect(page.getByRole('textbox', { name: 'Enter workspace description' }))
    .toHaveValue('My new workspace');
  await page.getByRole('button', { name: 'Create', exact: true }).click();
  await expect(page.getByText('My Workspace')).toBeVisible();
  await page.pause();
});