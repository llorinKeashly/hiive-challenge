import { Page, Locator } from '@playwright/test';

class TimezonePage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  public async addTimezone(timezoneName: string, timezoneLabel: string) {
    await this.page.click('button:has-text("Add timezone")');
    await this.page.fill('input[placeholder="Label"]', timezoneLabel);
    await this.page.locator('#timezone').selectOption(timezoneName);
    await this.page.click('button:has-text("Save")');
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