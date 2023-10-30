import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import TimezonePage from './page-objects/timezonePage'; // Adjust the path to match your project structure

test.describe('adding timezones', () => {
  let timezonePage: TimezonePage;
  const timezoneName = faker.lorem.word();

  test.beforeEach(async ({ page }) => {
    timezonePage = new TimezonePage(page);
    await page.goto('/');
    
  });

  test('add timezone', async ({ page }) => {
    await timezonePage.addTimezone('America/New_York', timezoneName);
    await expect(await timezonePage.getTableRowCount()).toBe(2);
  });

  test('can`t add timezone without name', async ({ page }) => {
    await timezonePage.addTimezone('America/New_York', '');
    await expect(await timezonePage.getTableRowCount()).toBe(1);
  });

  test('can`t add timezone without selecting timezone', async ({ page }) => {
    await timezonePage.addTimezone('', timezoneName);
    await expect(await timezonePage.getTableRowCount()).toBe(1);
  });

  test('timezones should be organized earliest to latest times', async ({ page }) => {
    const timezoneNameA = faker.lorem.word();

    await timezonePage.addTimezone('America/Juneau', timezoneNameA);
    await timezonePage.addTimezone('America/Chicago', timezoneName);

    const timeValues = await timezonePage.getTimeValues();
    const sortedTimeValues = [...timeValues].sort();
    console.log(timeValues);
    console.log(sortedTimeValues);
    await expect(timeValues).toEqual(sortedTimeValues);
  });
});
