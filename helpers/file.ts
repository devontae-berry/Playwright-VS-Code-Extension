// helpers/file.ts
import * as path from 'path';
import * as fs from 'fs';
import { Page } from '@playwright/test';
import { Download } from '@playwright/test';


/**
 * Upload a file from the tests/fixtures folder
 */
export async function uploadFile(
  page: Page,
  selector: string,
  fileName: string
) {
  const filePath = path.join(process.cwd(), 'tests', 'fixtures', fileName);

  // Create a basic file if it doesn't exist
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, 'Automated upload test.');
  }

  await page.setInputFiles(selector, filePath);
}

/**
 * Save a downloaded file to a temp folder and return the path
 */
export async function saveDownloadedFile(download: Download, savePath: string) {
  await download.saveAs(savePath);
}

/**
 * Read downloaded file contents
 */
export function readFile(filePath: string) {
  return fs.readFileSync(filePath, 'utf8');
}
