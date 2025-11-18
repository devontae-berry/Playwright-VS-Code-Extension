// import { test, expect } from '../../fixtures/auth';
// import { goToChat } from '../../helpers/navigation';
// import { chatPage } from '../../helpers/selectors';

// test('Chat GPT search feature', async ({ pageAuthenticated }) => {
//   const page = pageAuthenticated;

//   await goToChat(page);
//   await page.fill(chatPage.chatInput, 'Define cloud computing');
//   await page.click(chatPage.sendButton);

//   await expect(page.locator(chatPage.messageBubble)).toContainText('computing');
// });


// // import { test, expect } from '../../fixtures/auth';

// // test.describe('Chat Features', () => {
// //   test('Ask GPT search returns summary', async ({ pageAuthenticated }) => {
// //     const page = pageAuthenticated;
// //     await page.goto('/');
// //     await page.getByRole('button', { name: 'Ask' }).click();

// //     const askInput = page.getByPlaceholder('Ask anything about your docs...');
// //     await askInput.fill('Summarize the last uploaded file');
// //     await page.getByRole('button', { name: 'Send' }).click();

// //     const response = page.locator('div.chat-response').first();
// //     await expect(response).toContainText(/summary|summar/i, { timeout: 20000 });
// //   });

// //   test('chat history contains recent query', async ({ pageAuthenticated }) => {
// //     const page = pageAuthenticated;
// //     await page.goto('/chat-history');
// //     await expect(page.getByText('Summarize the last uploaded file', { exact: false })).toBeVisible();
// //   });
// // });
