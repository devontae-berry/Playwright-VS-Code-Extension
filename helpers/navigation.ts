// helpers/navigation.ts

import { Page } from '@playwright/test';
import { sidebar } from './selectors';

export async function goToUpload(page: Page) {
  await page.click(sidebar.upload);
}

export async function goToAsk(page: Page) {
  await page.click(sidebar.ask);
}

export async function goToChat(page: Page) {
  await page.click(sidebar.chat);
}

export async function goToSettings(page: Page) {
  await page.click(sidebar.settings);
}

export async function goToAnalytics(page: Page) {
  await page.click(sidebar.analytics);
}

export async function goToWorkspace(page: Page) {
  await page.click(sidebar.workspace);
}

export async function goToCalendar(page: Page) {
  await page.click(sidebar.calendar);
}

export async function logout(page: Page) {
  await page.click(sidebar.logout);
}
