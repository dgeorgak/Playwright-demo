
import { test } from '@playwright/test';
import { MainPage } from '../pages/main.page';
import { NavigationPanel } from '../pages/navigation.page';
import { ViewAll } from '../pages/viewAll.page';

test('delete a document', async ({ page }) => {
    const mainPage = new MainPage(page);
    const navigationPanel = new NavigationPanel(page);
    const viewAll = new ViewAll(page);

    const title = 'test title';
    const editorText = 'This is a sample text to be entered in the editor field'


    await mainPage.navigateToMainPage();
    // type some text in the title and text editor fields 
    await mainPage.populateDocument(title, editorText);
    // navigate to the View All page
    await navigationPanel.navigateToViewAllPage();
    // prep to accept external deletion dialog
    page.on('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.accept();
      });
    // delete the document
    await viewAll.deleteDocument();
    // confirm that the document is no longer present
    await viewAll.documentNotPresent();
    //await page.pause();
});


