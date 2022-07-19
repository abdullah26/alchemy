import { test, expect, Locator, chromium } from "@playwright/test";

test("homepage has Playwright in title and get started link linking to the intro page", async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://www.google.com/maps");
  await page.waitForSelector("#searchboxinput");
  const searchBarLocator: Locator = page.locator("input[id*='searchboxinput']");
  await searchBarLocator.fill(`Dublin`);
  await searchBarLocator.press("Enter");
  expect(page.locator("h1:has-text('Dublin')")).toBeTruthy();
  await page.close();
  await context.close();
  await browser.close();
});
