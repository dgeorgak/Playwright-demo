import { expect, Locator, Page } from '@playwright/test'

export class ViewAll {
    private thumbHeader: Locator
    private thumbFooter: Locator
    private edit: Locator
    private delete: Locator

    constructor(private page: Page) {
      this.thumbHeader = page.locator('.note-header')
      this.thumbFooter = page.locator('.note-footer')
      this.edit = page.locator('.editNote > a:nth-child(1)')
      this.delete = page.locator('.editNote > a:nth-child(2)')
    }
  
    async assertTitleContent(title: string)  {
      await expect(this.thumbFooter).toContainText(title)
    }
    async assertEditorContent(editorText: string)  {
      await expect(this.thumbHeader).toContainText(editorText)
    }
    async editDocument() {
      await this.thumbHeader.hover()
      await this.edit.click()
    }
    async deleteDocument() {
      await this.thumbHeader.hover()
      await this.delete.click()
      await this.page.keyboard.press('Enter')
    }
    async documentNotPresent(){
      expect(await this.thumbHeader.count()).toEqual(0);
    }
}

export default (page: Page): ViewAll => new ViewAll(page)
  