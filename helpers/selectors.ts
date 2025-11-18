// helpers/selectors.ts

// -----------------------------
// LOGIN PAGE
// -----------------------------
export const loginPage = {
  emailInput: 'input[placeholder="Username, Email or Phone"]',
  passwordInput: 'input[placeholder="Password"]',
  signInButton: 'button:has-text("Sign in")',
  otpInput: 'input[placeholder="Enter OTP"]',
  continueButton: 'button:has-text("Continue")'
};

// -----------------------------
// SIDEBAR ITEMS
// -----------------------------
export const sidebar = {
  upload: 'button:has-text("Upload")',
  chat: 'text=Chat',
  ask: 'text=Ask',
  reach: 'text=Reach',
  links: 'text=Links',
  calendar: 'text=Calendar',
  forms: 'text=Forms',
  analytics: 'text=Analytics',
  workspace: 'text=Workspace',
  chatHistory: 'text=Chat History',
  feedback: 'text=Feedback',
  settings: 'text=Settings',
  logout: 'text=Logout'
};

// -----------------------------
// SETTINGS PAGE
// -----------------------------
export const settingsPage = {
  trustedDevice: 'text=Trusted device',
  displaySettings: 'text=Display settings',
  videoMeeting: 'text=Video meeting',
  subscriptionUsage: 'text=Subscription & Usage',
};

// -----------------------------
// UPLOAD PAGE
// -----------------------------
export const uploadPage = {
  uploadButton: 'button:has-text("Upload")',
  fileInput: 'input[type="file"]',
  uploadSuccessText: 'text=Upload successful',
};

// -----------------------------
// CHAT / ASK
// -----------------------------
export const chatPage = {
  askBox: 'textarea[placeholder*="Ask"]',
  chatInput: 'textarea',
  sendButton: 'button:has-text("Send")',
  messageBubble: '.chat-message',
};

// Add more selectors as needed per feature…
