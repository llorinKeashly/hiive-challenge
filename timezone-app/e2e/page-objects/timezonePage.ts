import { Page, Locator } from '@playwright/test';

class TimezonePage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  public async addTimezone(timezoneName: string, timezoneLabel: string) {
    await this.page.getByTestId('add-timezone').click();
    await this.page.getByTestId('timezone-label').fill(timezoneLabel);
    await this.page.locator('#timezone').selectOption(timezoneName);
    await this.page.getByTestId('submit-timezone').click();
  }

  public async clickDeleteButton(timezoneName: string) {
    await this.page.getByRole('button', { name: `Delete , ${timezoneName}` }).click();
  }

  public async getTableRowCount() {
    return await this.page.locator('tbody > tr').count();
  }

  public async getTimeValues() {
    return await this.page.locator('tbody > tr > td:nth-child(3)').allInnerTexts();
  }
}

export default TimezonePage;