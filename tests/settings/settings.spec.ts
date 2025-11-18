// import { test, expect } from '../../fixtures/auth';

// test.describe('Settings', () => {
//   test('toggle trusted device', async ({ pageAuthenticated }) => {
//     const page = pageAuthenticated;
//     await page.goto('/settings');

//     await page.getByText('Trusted devices').click();
//     const toggle = page.locator('input[name="trusted_device"]');
//     if (await toggle.count() > 0) {
//       await toggle.click();
//       await expect(page.getByText('Saved')).toBeVisible();
//     }
//   });

//   test('display settings', async ({ pageAuthenticated }) => {
//     const page = pageAuthenticated;
//     await page.goto('/settings/display');

//     const darkToggle = page.locator('input[name="dark_mode"]');
//     if ((await darkToggle.count()) > 0) {
//       await darkToggle.click();
//       await expect(page.getByText('Saved')).toBeVisible();
//     }
//   });

//   test('video meeting UI loads', async ({ pageAuthenticated }) => {
//     const page = pageAuthenticated;
//     await page.goto('/video-meeting');

//     const joinBtn = page.getByRole('button', { name: /Join/i });
//     if ((await joinBtn.count()) > 0) await expect(joinBtn.first()).toBeVisible();
//   });

//   test('subscription & usage display', async ({ pageAuthenticated }) => {
//     const page = pageAuthenticated;
//     await page.goto('/settings/subscription');

//     await expect(page.getByText('Subscription Plan')).toBeVisible();
//   });
// });
