import { test } from '@playwright/test';
import { MainPage } from '../pages/main.page';
import { NavigationPanel } from '../pages/navigation.page';
import { ViewAll } from '../pages/viewAll.page';

test('create and edit a document', async ({ page }) => {
    const mainPage = new MainPage(page);
    const navigationPanel = new NavigationPanel(page);
    const viewAll = new ViewAll(page);

    const title = 'test title';
    const editorText = 'This is a sample text to be entered in the editor field'
    const newTitle = 'new title';
    const newEditorText = 'Text has been updated'


    await mainPage.navigateToMainPage();
    // type some text in the title and text editor fields 
    await mainPage.populateDocument(title, editorText);
    // navigate to the View All page
    await navigationPanel.navigateToViewAllPage();
    // assert thumbnail title and content
    await viewAll.assertTitleContent(title);
    await viewAll.assertEditorContent(editorText);
    // select to edit the document
    await viewAll.editDocument();
    // edit title and editor content
    await mainPage.clearTitle();
    await mainPage.clearEditorText();
    await mainPage.populateDocument(newTitle, newEditorText);
    // navigate to the View All page
    await navigationPanel.navigateToViewAllPage();
    // assert thumbnail with new title and content
    await viewAll.assertTitleContent(newTitle);
    await viewAll.assertEditorContent(newEditorText);
    
    //await page.pause();
});


