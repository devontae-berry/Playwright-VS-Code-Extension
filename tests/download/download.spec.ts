// import { test, expect } from '../../fixtures/auth';
// // import { saveDownload, readFile } from '../../helpers/file';
// // import * as path from 'path';

// // test('Download uploaded file', async ({ pageAuthenticated }) => {
// //   const page = pageAuthenticated;

// //   await page.goto('/files');

// //   const fileLink = page.getByRole('link', { name: 'sample_upload.txt' });
// //   await expect(fileLink).toBeVisible();

// //   const [download] = await Promise.all([
// //     page.waitForEvent('download'),
// //     fileLink.click(),
// //   ]);

// //   const savePath = await saveDownload(download, 'downloaded_sample.txt');
// //   const contents = readFile(savePath);

// //   expect(contents).toContain('Automated upload test.');
// // });


// // // import { test, expect } from '../../fixtures/auth';
// // // import * as fs from 'fs';
// // // import * as path from 'path';
// // // import * as os from 'os';

// // // test.describe('File Download', () => {
// // //   test('download uploaded file', async ({ pageAuthenticated }) => {
// // //     const page = pageAuthenticated;
// // //     await page.goto('/files');

// // //     const fileLink = page.getByRole('link', { name: 'sample_upload.txt' });
// // //     await expect(fileLink).toBeVisible();

// // //     // Correct way to wait for download
// // //     const [download] = await Promise.all([
// // //       page.waitForEvent('download'),
// // //       fileLink.click(),
// // //     ]);

// // //     const savePath = path.join(os.tmpdir(), 'sample_download.txt');
// // //     await download.saveAs(savePath);

// // //     expect(fs.existsSync(savePath)).toBeTruthy();
// // //     const content = fs.readFileSync(savePath, 'utf8');
// // //     expect(content).toContain('Automated upload test.');
// // //   });
// // // });

// test('user can login using OTP bypass', async ({ page }) => {
//     await page.goto('https://grabdocs.com/');
//     await page.getByRole('link', { name: ' Sign In ' }).click();
//     await page.getByRole('textbox', { name: 'Username, Email or Phone' }).click();
//     await page.getByRole('textbox', { name: 'Username, Email or Phone' }).fill('BERRYD0305@students.bowiestate.edu');
//     await page.getByRole('textbox', { name: 'Password' }).click();
//     await page.getByRole('textbox', { name: 'Password' }).fill('Trueballer152');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.getByRole('textbox', { name: 'Enter 6-digit code' }).click();
//     await page.getByRole('textbox', { name: 'Enter 6-digit code' }).fill('335577');
//     await page.getByRole('button', { name: 'Verify Code' }).click();
//     await page.getByText('Drop files or click to browseUp to 3 files per upload • Wait for completion').click();
//     await page.getByText('Drop files or click to browseUp to 3 files per upload • Wait for completion').setInputFiles('Test Document for GrabDocs Testing.txt');
//     await page.getByRole('listitem').getByRole('button').filter({ hasText: /^$/ }).click();
//     await page.getByRole('button', { name: 'Download' }).click();
// });