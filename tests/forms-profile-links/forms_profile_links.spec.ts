// import { test, expect } from '../../fixtures/auth';

// test.describe('Forms / Profile / Links', () => {
//   test('submit a sample form', async ({ pageAuthenticated }) => {
//     const page = pageAuthenticated;
//     await page.goto('/forms');

//     await page.getByRole('link', { name: 'Contact Form' }).click();
//     await page.getByPlaceholder('Your name').fill('Playwright Tester');
//     await page.getByPlaceholder('Your email').fill('tester@example.com');
//     await page.getByPlaceholder('Message').fill('Automated test submission.');
//     await page.getByRole('button', { name: 'Submit' }).click();

//     await expect(page.getByText('Thank you for your submission')).toBeVisible({ timeout: 8000 });
//   });

//   test('update profile display name', async ({ pageAuthenticated }) => {
//     const page = pageAuthenticated;
//     await page.goto('/profile');

//     await page.getByPlaceholder('Display name').fill('E2E Test User');
//     await page.getByRole('button', { name: 'Save' }).click();
//     await expect(page.getByText('Profile updated')).toBeVisible();
//   });

//   test('create shareable link for file', async ({ pageAuthenticated }) => {
//     const page = pageAuthenticated;
//     await page.goto('/files');

//     await page.getByText('sample_upload.txt').click();
//     await page.getByRole('button', { name: 'Share' }).click();
//     await page.getByRole('button', { name: 'Create link' }).click();

//     await expect(page.getByPlaceholder('Shareable link')).toBeVisible();
//   });
// });
