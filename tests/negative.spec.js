import { test, expect } from '@playwright/test';

test.describe('Negative Functionality Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
  });

  const testCases = [
    {
      tcID: 'Neg_Fun_001',
      name: 'joint compound words',
      text: 'mamayannenaeeadha',
      expected: 'මම යන්නෙ නෑ අද',
    },
    {
      tcID: 'Neg_Fun_002',
      name: 'common phrase with typo',
      text: 'api paasall yanavaa',
      expected: 'අපි පාසල් යනවා',
    },
    {
      tcID: 'Neg_Fun_003',
      name: 'phrase with formal english word',
      text: 'Bonjour world',
      expected: 'ඹොන්ජොඋර් වර්ල්ඩ්',
    },
    {
      tcID: 'Neg_Fun_004',
      name: 'universal measurement with unit',
      text: '40 cm palala wenna onae',
      expected: 'සෙන්ටිමීටර් 40 පලල වෙන්න ඔනේ',
    },
    {
      tcID: 'Neg_Fun_005',
      name: 'formal way of mentioning date',
      text: 'December 20th nivaadu',
      expected: 'දෙසැම්බර් 20 නිවාඩු',
    },
    {
      tcID: 'Neg_Fun_006',
      name: 'repeated words with different spelling',
      text: 'hari hri',
      expected: 'හරි හරි',
    },
    {
      tcID: 'Neg_Fun_007',
      name: 'long sentence with extra spaces',
      text: 'ada gedara yanna klin report eka hadala iwara karann. sanduda wenakan inna be. hamoma thamange wada tika complete karala yanna one.',
      expected: 'මම අද   එන්නෙ නැ',
    },
    {
      tcID: 'Neg_Fun_008',
      name: 'short sentence with extra spaces',
      text: 'mata   oone naee',
      expected: 'මට ඔනෙ නෑ',
    },
    {
      tcID: 'Neg_Fun_009',
      name: 'sentence with english abbreviation',
      text: 'BTW mama heta set venna enne naee',
      expected: 'BTW මම හෙට set වෙන්න එන්නෙ නෑ',
    },
    {
      tcID: 'Neg_Fun_010',
      name: 'sentence with code mixed language and no spacing',
      text: 'oyaaturnitindaalabalanna',
      expected: 'ඔයා turnitin දාල බලන්න ',
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
