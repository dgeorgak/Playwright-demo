import { expect, Locator, Page } from '@playwright/test'

export class MainPage {
    private fieldTitle: Locator
    private areaEditor: Locator
    private sidebar: Locator
  
    constructor(private page: Page) {
        this.fieldTitle = page.locator('[name="title"]')
        this.areaEditor = page.locator('[name="compose"]')
        this.sidebar = page.locator('[#sidebar-right > aside]')
    }
  
    async navigateToMainPage() {
      await this.page.goto('https://www.onlinetexteditor.net/');
    }
    async assertTitlePlaceholder(placeholderValue: string) {
        const placeholder = await this.fieldTitle.getAttribute('placeholder')
        expect(placeholder).toBe(placeholderValue)
    }
    async assertEditorPlaceholder(placeholderValue: string) {
        const placeholder = await this.areaEditor.getAttribute('placeholder')
        expect(placeholder).toBe(placeholderValue)
    }
    async populateDocument (title: string, content: string) {
        await this.provideTitle(title);
        await this.provideEditorText(content);    
    }

    async assertSidebarStatus(statusValue: string) {

        const status = await this.sidebar.getAttribute('data-display')
        //await this.page.pause();
        console.log('s:'+status)        
        console.log('v:'+statusValue)
        expect(status).toBe(statusValue)
        //expect(this.sidebar).toBeVisible();
    }

    async provideTitle(title: string) {
        await this.fieldTitle.type(title)
    }
    async provideEditorText(content: string) {
        await this.areaEditor.type(content)
    }
    async clearTitle() {
        await this.fieldTitle.clear()
    }
    async clearEditorText() {
        await this.areaEditor.clear()
    }
    async assertTitleContent(placeholderValue: string) {
        const placeholder = await this.fieldTitle.getAttribute('placeholder')
        expect(placeholder).toBe(placeholderValue)
    }
    async assertEditorContent(placeholderValue: string) {
        const placeholder = await this.areaEditor.getAttribute('placeholder')
        expect(placeholder).toBe(placeholderValue)
    }


}

export default (page: Page): MainPage => new MainPage(page)
  