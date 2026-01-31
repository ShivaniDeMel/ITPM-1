import { test, expect } from '@playwright/test';

test.describe('Positive Functionality Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
  });

  const testCases = [
    {
  tcID: 'Pos_Fun_001',
  name: 'Basic present tense sentence translation',
  text: 'eyaa kadeeta yanavaa',
  expected: 'එයා කඩේට යනවා',
},
{
  tcID: 'Pos_Fun_002',
  name: 'Compound sentence with verb sequence',
  text: 'dhuva paasal gihin panthi yanavaa',
  expected: 'දුව පාසල් ගිහින් පන්ති යනවා',
},
{
  tcID: 'Pos_Fun_003',
  name: 'Conditional sentence with advice tone',
  text: 'paasal nivaadu vunath paadam karanna epaeyi',
  expected: 'පාසල් නිවාඩු වුනත් පාඩම් කරන්න එපැයි',
},
{
  tcID: 'Pos_Fun_004',
  name: 'Question sentence with informal wording',
  text: 'ammata saniipadha?',
  expected: 'අම්මට සනීපද?',
},
{
  tcID: 'Pos_Fun_005',
  name: 'Single verb imperative form',
  text: 'poolimak haedhenna',
  expected: 'පෝලිමක් හැදෙන්න',
},
{
  tcID: 'Pos_Fun_006',
  name: 'Negative sentence with first person',
  text: 'mama adha kaeema hadhanne nae',
  expected: 'මම අද කෑම හදන්නෙ නැ',
},
{
  tcID: 'Pos_Fun_007',
  name: 'Common greeting translation',
  text: 'aayuboovan!',
  expected: 'ආයුබෝවන්!',
},
{
  tcID: 'Pos_Fun_008',
  name: 'Command sentence with object',
  text: 'vaarthaava evanna',
  expected: 'වාර්තාව එවන්න',
},
{
  tcID: 'Pos_Fun_009',
  name: 'Informal negative response with punctuation',
  text: 'naee, mata thaama laebune naee',
  expected: 'නෑ, මට තාම ලැබුනෙ නෑ',
},
{
  tcID: 'Pos_Fun_010',
  name: 'Formal request with polite language',
  text: 'isthuuthi obagee sahayata, karuNaakara mata eya vahaama laebenna salasvanna',
  expected: 'ඉස්තූති ඔබගේ සහයට, කරුණාකර මට එය වහාම ලැබෙන්න සලස්වන්න',
},
{
  tcID: 'Pos_Fun_011',
  name: 'Informal command with urgency',
  text: 'eeyi ikmanin varen',
  expected: 'ඒයි ඉක්මනින් වරෙන්',
},
{
  tcID: 'Pos_Fun_012',
  name: 'Simple negative future intent',
  text: 'mama adha enne naee',
  expected: 'මම අද එන්නෙ නෑ',
},
{
  tcID: 'Pos_Fun_013',
  name: 'Colloquial waiting request',
  text: 'othanin navathinna',
  expected: 'ඔතනින් නවතින්න',
},
{
  tcID: 'Pos_Fun_014',
  name: 'Expression of necessity or requirement',
  text: 'ammata kadeeta yanna onee',
  expected: 'අම්මට කඩේට යන්න ඔනේ',
},
{
  tcID: 'Pos_Fun_015',
  name: 'Repeated emphasis word translation',
  text: 'epaa epaa',
  expected: 'එපා එපා',
},
{
  tcID: 'Pos_Fun_016',
  name: 'Past tense completion statement',
  text: 'api giya maase ivara karaa',
  expected: 'අපි ගිය මාසෙ ඉවර කරා',
},
{
  tcID: 'Pos_Fun_017',
  name: 'Casual question sentence',
  text: 'oyaa gedhara yanavadha?',
  expected: 'ඔයා ගෙදර යනවද?',
},
{
  tcID: 'Pos_Fun_018',
  name: 'Plural subject question sentence',
  text: 'oyaalaa vaedata yanavadha?',
  expected: 'ඔයාලා වැඩට යනවද?',
},
{
  tcID: 'Pos_Fun_019',
  name: 'Polite request for help',
  text: 'puluvannam mata udavvak karanna',
  expected: 'පුලුවන්නම් මට උඩව්වක් කරන්න',
},
{
  tcID: 'Pos_Fun_020',
  name: 'Direct command sentence',
  text: 'ooka navaththanna',
  expected: 'ඕක නවත්තන්න',
},
{
  tcID: 'Pos_Fun_021',
  name: 'Present continuous tense sentence',
  text: 'thaaththaa dhaen gedhara athu gaanavaa',
  expected: 'තාත්තා දැන් ගෙදර අතු ගානවා',
},
{
  tcID: 'Pos_Fun_022',
  name: 'Plural noun activity description',
  text: 'Lamayi vaththe sellam karanavaa',
  expected: 'ළමයි වත්තෙ සෙල්ලම් කරනවා',
},
{
  tcID: 'Pos_Fun_023',
  name: 'Casual instruction phrase',
  text: 'avith yanna',
  expected: 'අවිත් යන්න',
},
{
  tcID: 'Pos_Fun_024',
  name: 'Long paragraph with mixed Sinhala and English words',
  text: 'adha gedhara hitiya nisaa pavule aya ekka kaalaya gatha karaa, havasa pansal gihin gedhara avith phone eka balala nidhaa ganna giyaa',
  expected: 'අද ගෙදර හිටිය නිසා පවුලෙ අය එක්ක කාලය ගත කරා, හවස පන්සල් ගිහින් ගෙදර අවිත් phone එක බලල නිදා ගන්න ගියා',
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
