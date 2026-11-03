import { test, expect } from '@playwright/test';

test('Download File', async ({ page }) => {

  await page.goto('https://demo.automationtesting.in/FileDownload.html');
   await page.pause();
   const downloadpromise=page.waitForEvent('download');
  const downlaod = page.getByRole('link', { name: 'Download' });
  downlaod.click();

    const download = await downloadpromise;

    await download.saveAs('downloads/downloaded_file.pdf');
});