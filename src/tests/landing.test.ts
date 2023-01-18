import { test, expect } from '@playwright/test';
import { MainPage } from '../pages/main.page';


test('confirm page title', async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.navigateToMainPage();
    // Confirm expected page title
    await expect(page).toHaveTitle(`Online Text Editor - #1 Online Notepad (editpad)`);
});

test('confirm default state', async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.navigateToMainPage();
    // Assert Title placeholder text
    await mainPage.assertTitlePlaceholder('Title');
    // Assert Editor placeholder text
    await mainPage.assertEditorPlaceholder('Start Writing With Online Text Editor');
    //TODO: Assert that sidebar is open
    //await mainPage.assertSidebarStatus('show')
    //await page.pause();
});

//TODO: hide and show sidebar
