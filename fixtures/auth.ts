import { test as base, expect, Page } from '@playwright/test';

// Step 1 — Define fixture types
type AuthFixtures = {
  authenticatedPage: Page;
};

// Step 2 — Extend Playwright's base test with your fixture
export const test = base.extend<AuthFixtures>({
  authenticatedPage: async ({ page }, use) => {
    // ---- Login Process ----
    await page.goto(process.env.BASE_URL || ''); // Navigation to Homepage (grabdocs.com)
    await page.waitForTimeout(1000);
    await expect(page).toHaveTitle(/GrabDocs/i); // Verify Homepage is loaded
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Sign In' }).click(); // Open Sign In Page
    await page.waitForTimeout(1000);
    await expect(page).toHaveURL(/login/i); // Verify URL is login page
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Username, Email or Phone' }).fill(process.env.GRABDOCS_USER || ''); // Fill username
    await page.waitForTimeout(1000);
    await expect(page.getByRole('textbox', { name: 'Username, Email or Phone' })) // Verify username field contains value
        .toHaveValue(process.env.GRABDOCS_USER || '');
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Password' }).fill(process.env.GRABDOCS_PASS || ''); // Fill password
    await page.waitForTimeout(1000);
    await expect(page.getByRole('textbox', { name: 'Password' })) // Verify password field is not empty
        .not.toHaveValue('');
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Sign in' }).click(); // Click sign in
    await page.waitForTimeout(1000);
    await expect(page.getByRole('textbox', { name: 'Enter 6-digit code' })) // Verify OTP input field is visible
        .toBeVisible();
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Enter 6-digit code' }).fill(process.env.AUTH_CODE || ''); // Fill OTP code
    await page.waitForTimeout(1000);
    await expect(page.getByRole('textbox', { name: 'Enter 6-digit code' })) // Verify OTP field contains 6 digits
        .toHaveValue(process.env.AUTH_CODE || '');
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Verify Code' }).click(); // Click Verify Code Button
    await page.waitForTimeout(1000);
    await page.pause(); // Verify Login Success
  },
});

// Export Playwright's expect so tests can use it
export { expect };


// import { test as base, expect } from '@playwright/test';

// export const test = base.extend({
//   // Create a fixture called "authenticatedPage"
//   authenticatedPage: async ({ page }, use) => {

//     test('GrabDocs Login w/ MFA (OTP bypass) w/ Assertions', async ({ page }) => {
//     await page.goto(process.env.BASE_URL || ''); // Navigation to Homepage (grabdocs.com)
//     await page.waitForTimeout(1000);
//     await expect(page).toHaveTitle(/GrabDocs/i); // Verify Homepage is loaded
//     await page.waitForTimeout(1000);
//     await page.getByRole('link', { name: 'Sign In' }).click(); // Open Sign In Page
//     await page.waitForTimeout(1000);
//     await expect(page).toHaveURL(/login/i); // Verify URL is login page
//     await page.waitForTimeout(1000);
//     await page.getByRole('textbox', { name: 'Username, Email or Phone' }).fill(process.env.GRABDOCS_USER || ''); // Fill username
//     await page.waitForTimeout(1000);
//     await expect(page.getByRole('textbox', { name: 'Username, Email or Phone' })) // Verify username field contains value
//         .toHaveValue(process.env.GRABDOCS_USER || '');
//     await page.waitForTimeout(1000);
//     await page.getByRole('textbox', { name: 'Password' }).fill(process.env.GRABDOCS_PASS || ''); // Fill password
//     await page.waitForTimeout(1000);
//     await expect(page.getByRole('textbox', { name: 'Password' })) // Verify password field is not empty
//         .not.toHaveValue('');
//     await page.waitForTimeout(1000);
//     await page.getByRole('button', { name: 'Sign in' }).click(); // Click sign in
//     await page.waitForTimeout(1000);
//     await expect(page.getByRole('textbox', { name: 'Enter 6-digit code' })) // Verify OTP input field is visible
//         .toBeVisible();
//     await page.waitForTimeout(1000);
//     await page.getByRole('textbox', { name: 'Enter 6-digit code' }).fill(process.env.AUTH_CODE || ''); // Fill OTP code
//     await page.waitForTimeout(1000);
//     await expect(page.getByRole('textbox', { name: 'Enter 6-digit code' })) // Verify OTP field contains 6 digits
//         .toHaveValue(process.env.AUTH_CODE || '');
//     await page.waitForTimeout(1000);
//     await page.getByRole('button', { name: 'Verify Code' }).click(); // Click Verify Code Button
//     await page.waitForTimeout(1000);
//     await page.pause(); // Verify Login Success
//     });
//   },
// });

// export { expect };


// // // fixtures/auth.ts
// // import { test as base, expect, Page } from '@playwright/test';
// // import { loginPage } from '../helpers/selectors';

// // export const test = base.extend<{
// //   pageAuthenticated: Page;
// // }>({
// //   pageAuthenticated: async ({ page }, use) => {
// //     await page.goto('/login');

// //     // Enter email
// //     await page.fill(loginPage.emailInput, process.env.GRABDOCS_EMAIL || '');
    
// //     // Enter password
// //     await page.fill(loginPage.passwordInput, process.env.GRABDOCS_PASSWORD || '');
    
// //     await page.click(loginPage.signInButton);

// //     // OTP bypass
// //     await page.fill(loginPage.otpInput, process.env.OTP_BYPASS || '335577');
// //     await page.click(loginPage.continueButton);

// //     // Verify login success
// //     await expect(page.getByText('Dashboard')).toBeVisible({ timeout: 15000 });

// //     await use(page);
// //   },
// // });

// // export { expect };


// // // import { test as base, expect, Page } from '@playwright/test';

// // // export const test = base.extend<{ pageAuthenticated: Page }>({
// // //   pageAuthenticated: async ({ page }, use: (page: Page) => Promise<void>) => {
// // //     const baseUrl = process.env.BASE_URL ?? 'https://app.grabdocs.com';
// // //     const username = process.env.GRABDOCS_USER ?? '';
// // //     const password = process.env.GRABDOCS_PASS ?? '';

// // //     await page.goto(`${baseUrl}/login`);

// // //     // Fill email/username and password
// // //     await page.getByPlaceholder('Username, Email or Phone').fill(username);
// // //     await page.getByPlaceholder('Password').fill(password);

// // //     // OTP bypass
// // //     await page.addInitScript(() => {
// // //       try { window.localStorage.setItem('otp_bypass_token', '123456'); } catch(e) {}
// // //     });

// // //     await page.getByRole('button', { name: 'Sign in' }).click();

// // //     // Wait for dashboard/profile element
// // //     await page.waitForLoadState('networkidle');
// // //     await page.getByRole('button', { name: 'Profile' }).waitFor({ state: 'visible', timeout: 15000 });

// // //     await use(page); // <-- now correctly typed
// // //   }
// // // });

// // // export { expect };
