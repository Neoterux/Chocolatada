import { expect, test } from "@playwright/test";

test('home page has h1 containing "Kokoa"', async ({ page }) => {
  await page.goto("/");
  expect(await page.textContent("h1")).toContain("Kokoa");
});
