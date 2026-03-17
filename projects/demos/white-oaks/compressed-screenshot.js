const puppeteer = require('puppeteer');
const fs = require('fs');

async function takeScreenshots() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    try {
        // Screenshot aftercare app (mobile viewport)
        await page.setViewport({ width: 375, height: 667, deviceScaleFactor: 1 });
        await page.goto('http://localhost:8080/aftercare-app.html');
        await new Promise(resolve => setTimeout(resolve, 3000));
        const aftercareScreenshot = await page.screenshot({ 
            encoding: 'base64',
            type: 'jpeg',
            quality: 80
        });
        fs.writeFileSync('aftercare-compressed.txt', aftercareScreenshot);
        
        // Screenshot handover sheet (smaller desktop viewport)  
        await page.setViewport({ width: 900, height: 600, deviceScaleFactor: 1 });
        await page.goto('http://localhost:8080/handover-sheet.html');
        await new Promise(resolve => setTimeout(resolve, 3000));
        const handoverScreenshot = await page.screenshot({ 
            encoding: 'base64',
            type: 'jpeg',
            quality: 80
        });
        fs.writeFileSync('handover-compressed.txt', handoverScreenshot);
        
        console.log('Compressed screenshots saved!');
    } catch (error) {
        console.error('Error:', error);
    }
    
    await browser.close();
}

takeScreenshots();