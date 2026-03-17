const puppeteer = require('puppeteer');
const fs = require('fs');

async function takeScreenshots() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    try {
        // Screenshot aftercare app (mobile viewport)
        await page.setViewport({ width: 414, height: 896, deviceScaleFactor: 2 });
        await page.goto('http://localhost:8080/aftercare-app.html');
        await new Promise(resolve => setTimeout(resolve, 3000)); // Wait 3 seconds
        const aftercareScreenshot = await page.screenshot({ encoding: 'base64' });
        fs.writeFileSync('aftercare-app-screenshot.txt', aftercareScreenshot);
        
        // Screenshot handover sheet (desktop viewport)  
        await page.setViewport({ width: 1200, height: 800, deviceScaleFactor: 1 });
        await page.goto('http://localhost:8080/handover-sheet.html');
        await new Promise(resolve => setTimeout(resolve, 3000)); // Wait 3 seconds
        const handoverScreenshot = await page.screenshot({ encoding: 'base64' });
        fs.writeFileSync('handover-sheet-screenshot.txt', handoverScreenshot);
        
        console.log('Screenshots saved successfully!');
    } catch (error) {
        console.error('Error:', error);
    }
    
    await browser.close();
}

takeScreenshots();