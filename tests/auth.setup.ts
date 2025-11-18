// import { test as setup, expect } from '@playwright/test';
// import path from 'path';

// const authFile = path.join(__dirname, '../playwright/.auth/user.json');

// setup('authenticate', async ({ page }) => {
//   // Perform authentication steps. Replace these actions with your own.
//   await page.goto(process.env.BASE_URL || '');
//   await page.waitForTimeout(1000);
//   await expect(page).toHaveTitle(/GrabDocs/i);
//   await page.waitForTimeout(1000);
//   await page.getByRole('link', { name: 'Sign In' }).click();
//   await page.waitForTimeout(1000);
//   await expect(page).toHaveURL(/login/i);
//   await page.waitForTimeout(1000);
//   await page.getByRole('textbox', { name: 'Username, Email or Phone' }).fill(process.env.GRABDOCS_USER || '');
//   await page.waitForTimeout(1000);
//   await expect(page.getByRole('textbox', { name: 'Username, Email or Phone' }))
//       .toHaveValue(process.env.GRABDOCS_USER || '');
//   await page.waitForTimeout(1000);
//   await page.getByRole('textbox', { name: 'Password' }).fill(process.env.GRABDOCS_PASS || '');
//   await page.waitForTimeout(1000);
//   await expect(page.getByRole('textbox', { name: 'Password' }))
//       .not.toHaveValue('');
//   await page.waitForTimeout(1000);
//   await page.getByRole('button', { name: 'Sign in' }).click();
//   await page.waitForTimeout(1000);
//   await expect(page.getByRole('textbox', { name: 'Enter 6-digit code' }))
//       .toBeVisible();
//   await page.waitForTimeout(1000);
//   await page.getByRole('textbox', { name: 'Enter 6-digit code' }).fill(process.env.AUTH_CODE || '');
//   await page.waitForTimeout(1000);
//   await expect(page.getByRole('textbox', { name: 'Enter 6-digit code' }))
//       .toHaveValue(process.env.AUTH_CODE || '');
//   await page.waitForTimeout(1000);
//   await page.getByRole('button', { name: 'Verify Code' }).click();
//   await page.waitForTimeout(1000);
//   await page.pause();
//   // Wait until the page receives the cookies.
//   //
//   // Sometimes login flow sets cookies in the process of several redirects.
//   // Wait for the final URL to ensure that the cookies are actually set.
//   await page.waitForURL('https://app.grabdocs.com/upload');
//   // Alternatively, you can wait until the page reaches a state where all cookies are set.
//   await expect(page.getByText('Drop files or click to browseUp to 3 files per upload • Wait for completion')).toBeVisible();

//   // End of authentication steps.

//   await page.context().storageState({ path: authFile });
// });