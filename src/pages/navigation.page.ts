import { Locator, Page } from '@playwright/test'

export class NavigationPanel {
    private document: Locator
    private newDocument: Locator
    private upload: Locator
    private download: Locator
    private viewAll: Locator
  
    constructor(private page: Page) {
        this.document = page.locator('a:has-text("Document")')
        this.newDocument = page.locator('a:has-text("New Document")')
        this.upload = page.locator('a:has-text("Upload")')
        this.download = page.locator('a:has-text("Download")')
        this.viewAll = page.locator('a:has-text("View All")')
    }
  
    async navigateToViewAllPage() {
      await this.viewAll.click();
    }


}

export default (page: Page): NavigationPanel => new NavigationPanel(page)
  