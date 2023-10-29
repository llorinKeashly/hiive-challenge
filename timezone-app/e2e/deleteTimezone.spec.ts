import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import TimezonePage from './page-objects/timezonePage'; // Adjust the path to match your project structure

test.describe('deleting timezones', () => {
  let timezonePage: TimezonePage;
  const timezoneName = faker.lorem.word();

  test.beforeEach(async ({ page }) => {
    timezonePage = new TimezonePage(page);
    await page.goto('/');
    
  });

  test('can delete added timezone', async ({ page }) => {
    await timezonePage.addTimezone('America/New_York', timezoneName);
    await expect(await timezonePage.getTableRowCount()).toBe(2);

    await timezonePage.clickDeleteButton(timezoneName);
    await expect(await timezonePage.getTableRowCount()).toBe(1);
  });

  test('can`t delete (You) timezone', async ({ page }) => {
    await timezonePage.clickDeleteButton('Local');
    await page.reload();
    await expect(await timezonePage.getTableRowCount()).toBe(1);
  });
});
