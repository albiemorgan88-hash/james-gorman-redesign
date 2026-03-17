const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function takeScreenshots() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    // Set mobile viewport for aftercare app
    await page.setViewport({
        width: 414,
        height: 896,
        deviceScaleFactor: 2
    });

    try {
        // Screenshot aftercare app
        await page.goto('http://localhost:8080/aftercare-app.html');
        await page.waitForLoadState('networkidle'); // Wait for page to load
        const aftercareScreenshot = await page.screenshot({
            type: 'png',
            encoding: 'base64'
        });
        
        // Save base64 for embedding
        fs.writeFileSync('aftercare-app-screenshot.txt', aftercareScreenshot);
        
        // Set desktop viewport for handover sheet
        await page.setViewport({
            width: 1200,
            height: 800,
            deviceScaleFactor: 1
        });
        
        // Screenshot handover sheet
        await page.goto('http://localhost:8080/handover-sheet.html');
        await page.waitForLoadState('networkidle');
        const handoverScreenshot = await page.screenshot({
            type: 'png',
            encoding: 'base64'
        });
        
        // Save base64 for embedding
        fs.writeFileSync('handover-sheet-screenshot.txt', handoverScreenshot);
        
        console.log('Screenshots saved successfully!');
        
    } catch (error) {
        console.error('Error taking screenshots:', error);
    }
    
    await browser.close();
}

takeScreenshots();