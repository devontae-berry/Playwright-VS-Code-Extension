// import { test, expect } from '../../fixtures/auth';
// import { uploadFile } from '../../helpers/file';
// import { uploadPage } from '../../helpers/selectors';
// import { goToUpload } from '../../helpers/navigation';

// test('Upload file feature', async ({ pageAuthenticated }) => {
//   const page = pageAuthenticated;

//   await goToUpload(page);
//   await page.click(uploadPage.uploadButton);

//   await uploadFile(page, uploadPage.fileInput, 'sample_upload.txt');

//   await expect(page.getByText('Upload successful')).toBeVisible();
// });


// // import { test, expect } from '../../fixtures/auth';
// // import * as fs from 'fs';
// // import * as path from 'path';

// // test.describe('File Upload', () => {
// //   test('upload a file', async ({ pageAuthenticated }) => {
// //     const page = pageAuthenticated;
// //     await page.goto('/');

// //     await page.getByRole('button', { name: 'Upload' }).click();
// //     const fileInput = page.locator('input[type="file"]');
// //     await expect(fileInput).toHaveCount(1);

// //     const fixturesDir = path.join(process.cwd(), 'tests', 'fixtures');
// //     fs.mkdirSync(fixturesDir, { recursive: true });
// //     const filePath = path.join(fixturesDir, 'sample_upload.txt');
// //     fs.writeFileSync(filePath, 'Automated upload test.');

// //     await fileInput.setInputFiles(filePath);
// //     await expect(page.locator('text=Upload successful')).toBeVisible({ timeout: 10000 });
// //     await expect(page.locator('text=sample_upload.txt')).toBeVisible();
// //   });
// // });
