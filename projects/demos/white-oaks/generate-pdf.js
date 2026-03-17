const puppeteer = require('puppeteer');
const path = require('path');

async function generatePDF() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    try {
        const htmlPath = path.join(__dirname, 'proposal-v4.html');
        await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });
        
        await page.pdf({
            path: 'proposal-v4.pdf',
            format: 'A4',
            printBackground: true,
            margin: {
                top: '20px',
                bottom: '20px',
                left: '20px',
                right: '20px'
            }
        });
        
        console.log('PDF generated successfully: proposal-v4.pdf');
    } catch (error) {
        console.error('Error generating PDF:', error);
    }
    
    await browser.close();
}

generatePDF();