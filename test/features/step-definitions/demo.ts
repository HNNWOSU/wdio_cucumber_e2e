import { Given, When, Then } from "@wdio/cucumber-framework";
import * as chai from "chai";


Given(/^Google page is opened$/, async function () {
    await browser.url("https://google.com");

    // Accept cookies if the popup appears
    const acceptCookiesButton = await $('#L2AGLb'); // Google's "Accept Cookies" button
    if (await acceptCookiesButton.isDisplayed()) {
        await acceptCookiesButton.click();
        console.log("Accepted cookies");
    }

    console.log("Google page opened");
});

When(/^I search for (.*)$/, async function (SearchItem ){
    console.log(`searchItem: ${SearchItem}`);
   let searchBox = await $(".gLFyf");
    await searchBox.setValue(SearchItem);
  
    await browser.keys("Enter");
    
});

Then(/^click on the first link in the search results$/, async function () {
    let ele = await $("h3.LC20lb")
    await ele.click();
    await browser.pause(5000);
    console.log("Clicked on the first link");
});

Then(/^the url should match (.*)$/, async function (expectedURL) {
    console.log(`>> expectedURL: ${expectedURL}`);
    let url = await browser.getUrl();
    chai.expect(url).to.equal(expectedURL);
    console.log("URL matched");
})

/**
 * Web Interactions
 */
Given(/^A web page is opened$/, async function () {
    await browser.url("/inputs");
    await browser.setTimeout({implicit: 15000, pageLoad: 10000});
    // await browser.maximizeWindow();
    console.log("Opened Heroku page");
});

When(/^Perform web interractions$/, async function () {
/**
 * 1. Input Box    
 * Actions
 * 1.1. Type into input box
 * 1.2. Clear input box and addvalue
 * 1.3. Click and type
 * 1.4. Slow typing
 * 
 */

let num = 1234567890;
let strNum = num.toString();

let ele =  $('input[type=number]');
await ele.click();
await ele.setValue(strNum);
await browser.pause(2000);

// // adding numbers slowly
// let Number = 1234567890;
// let strNum = Number.toString();
// for (let i = 0; i < strNum.length; i++) {
//     let charStr = strNum.charAt(i);  
//     await browser.pause(1000);
//     await browser.keys(charStr);
// }

/**
 * 2. Dropdown
 * Actions
 * 2.1. Assert default option is selelcted
 * 2.2. Select option by attribute, by index, by text
 * 2.3. Get all options
 */

// let dropDwon =  $('//option[@selected="selected"]');
// let selectedOption = await dropDwon.getText();
// chai.expect(selectedOption).to.equal("Please select an option");

// select by specific option
// let ddEle = $('#dropdown');
// select by attribute
//await ddEle.selectByAttribute("value", "1");

// select by text
//await ddEle.selectByVisibleText("Option 2");

// select by index
// await ddEle.selectByIndex(0);

// await browser.pause(5000);

});
