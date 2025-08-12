const puppeteer = require("puppeteer");

const codeObj = require('./codes');
const { del } = require("request");

const loginLink = 'https://www.hackerrank.com/auth/login';
const email = 'apexigamer73@gmail.com';
const password = 'mokshsharma123';



(async function(){
  try{
    let browserInstance = await puppeteer.launch({
        headless: false,
        args: ['--start-maximized'],
        defaultViewport: null
    })
    let newTab = await browserInstance.newPage();
    await newTab.goto(loginLink)
    await newTab.type("input[name='username']", email, { delay: 50 })
    await newTab.type("input[type='password']", password, { delay: 50 })
    await newTab.click("button[type='submit']", { delay: 50 })
    await waitAndClick('.topic-card a[data-attr1="algorithms"]', newTab)
    await waitAndClick('input[value="warmup"]', newTab)
    let allChalanges = await newTab.$$('.ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled' , {delay : 50})
    console.log(allChalanges.length);
    await questionSolver(newTab,allChalanges[0],codeObj.answers[0])
    




}catch (error){
      console.log(error);
      
  }
})()












// browserOpen.then(function (browserObj) {
//     return browserObj.newPage();
// }).then(function (newTab) {
//     page = newTab;
//     return newTab.goto(loginLink, { waitUntil: "networkidle2" });
// }).then(function () {
//     return page.type("input[name='username']", email, { delay: 50 });
// }).then(function () {
//     return page.type("input[type='password']", password, { delay: 50 });
// }).then(function () {
//     return page.click("button[type='submit']", { delay: 50 });
// }).then(function () {
//     return page.waitForNavigation({ waitUntil: "networkidle2" });
// }).then(function () {
//     return waitAndClick('.topic-card a[data-attr1="algorithms"]', page);
// }).then(function () {
//     return waitAndClick('input[value="warmup"]', page);
// }).then(function () {
//     return page.waitForSelector('body', { timeout: 5000 });
// }).then(function () {
//     return page.$$('.ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled');
// }).then(function (questionArr) {
//     console.log('Number of questions:', questionArr.length);
//     return questionSolver(page,questionArr[0],codeObj.answers[0]);
// }).catch(function (err) {
//     console.error("Error occurred:", err);
// });

// ✅ Wait and click function (No Changes)
async function waitAndClick(selector, cPage) {
   await cPage.waitForSelector(selector)
   let selectorClicked = cPage.click(selector)
   return selectorClicked
}

// ✅ Fixed Checkbox Interaction in questionSolver
async function questionSolver(page,question,answer) {
  try{
    await question.click()
    await waitAndClick('.monaco-editor.no-user-select.standalone.showUnused.showDeprecated.vs', page)
    await page.waitForSelector("input[type='checkbox']", { visible: true, timeout: 5000 })
    await page.evaluate(() => {
        let checkbox = document.querySelector("input[type='checkbox']");
        if (checkbox && !checkbox.checked) checkbox.click();
    })
    await page.type('textarea.custominput' , answer , {delay:10})
    await page.keyboard.down('Control')
    await page.keyboard.press('A',{delay:100})
    await page.keyboard.press('X', {delay:100})
    await page.keyboard.up('Control')
    await  waitAndClick('.monaco-editor.no-user-select.standalone.showUnused.showDeprecated.vs' , page)
    await page.keyboard.down('Control')
    await page.keyboard.press('A',{delay:100})
    await page.keyboard.press('V',{delay:100})
    await page.click('.hr-monaco__run-code' , {delay:50})
  }
  catch (error) {
     console.log(error);
     
  }

}
