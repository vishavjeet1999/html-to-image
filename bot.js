const puppeteer = require('puppeteer')

const bot = async () => {
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sanbox']
    })
    const page = await browser.newPage()
    await page.goto("https://google.com",{
        waitUntil: "networkidle2"
    })
    await browser.close()
    return "done"
}

module.exports = bot