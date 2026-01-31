import { test, expect } from '@playwright/test';

test.describe('Positive UI Functionality Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
  });
  const testCases = [
    {
      tcID: 'Pos_UI_001',
      name: 'Punctuation Preservation in Output',
      text: 'oyaata kohomadha?',
      expected: 'ඔයාට කොහොමද?',
    },
    ];

  for (const { text, expected } of testCases) {
    test(`Translate: "${text}"`, async ({ page }) => {
      const inputField = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
      );
      const outputField = page.locator('div.w-full.h-80.p-3.rounded-lg').first();

      await inputField.fill(text);
      await inputField.press('Enter');

      await expect(outputField).toHaveText(expected, { timeout: 15000 });
    });
  }
});
