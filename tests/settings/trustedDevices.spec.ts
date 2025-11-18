// // import { test, expect } from '../../fixtures/auth';
// // import { goToSettings } from '../../helpers/navigation';
// // import { settingsPage } from '../../helpers/selectors';

// // test('Trusted device settings loads', async ({ pageAuthenticated }) => {
// //   await goToSettings(pageAuthenticated);
// //   await pageAuthenticated.click(settingsPage.trustedDevice);
// //   await expect(pageAuthenticated.getByText('Trusted device')).toBeVisible();
// // });

// import { test, expect } from '../../fixtures/auth';

// test('Registering Device as a Trusted Device', async ({ page }) => {
//     await page.goto(process.env.BASE_URL || '');
//     await expect(page).toHaveTitle(/GrabDocs/i);
//     await page.getByRole('link', { name: 'Sign In' }).click();
//     await expect(page).toHaveURL(/login/i);
//     await page.getByRole('textbox', { name: 'Username, Email or Phone' }).fill(process.env.GRABDOCS_USER || '');
//     await expect(page.getByRole('textbox', { name: 'Username, Email or Phone' }))
//         .toHaveValue(process.env.GRABDOCS_USER || '');
//     await page.getByRole('textbox', { name: 'Password' }).fill(process.env.GRABDOCS_PASS || '');
//     await expect(page.getByRole('textbox', { name: 'Password' }))
//         .not.toHaveValue('');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await expect(page.getByRole('textbox', { name: 'Enter 6-digit code' }))
//         .toBeVisible();
//     await page.getByRole('textbox', { name: 'Enter 6-digit code' }).fill(process.env.AUTH_CODE || '');
//     await expect(page.getByRole('textbox', { name: 'Enter 6-digit code' }))
//         .toHaveValue(process.env.AUTH_CODE || '');
//     await page.getByRole('button', { name: 'Verify Code' }).click();
//     await expect(page).toHaveURL('https://app.grabdocs.com/upload');
//     await page.waitForTimeout(1000);
    
    
    
//     await page.pause();
// });