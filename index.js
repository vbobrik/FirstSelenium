/*
var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();
driver.get('http://www.webdriverjs.com/');
driver.findElement(By.css('.search-field.form-control')).sendKeys("WebdriverJs");
driver.findElement(By.css('button.search-submit i')).click();
driver.wait(until.elementTextIs(driver.findElement(By.css('.vl-main-header>h1')), "Search Results for: WebdriverJs"), 10000);
driver.quit();
*/

/*
const webdriver = require('selenium-webdriver');

const By = webdriver.By;
const until = webdriver.until;
const driver = new webdriver.Builder().forBrowser('chrome').build();
driver.get('https://yandex.by');
driver.findElement(By.css('#text')).sendKeys('Акроним');
driver.findElement(By.css('.search2__button .button')).click();
const test = driver.findElement(By.css('.serp-item[data-cid="1"] .needsclick'));
driver.wait(until.elementTextIs(test, "Акроним"), 5000);
test.click();
driver.quit();
*/

const webdriver = require('selenium-webdriver');

const BY = webdriver.By;
const DRIVER = new webdriver.Builder().forBrowser('chrome').build()

// AUTORITHATION vk.com
DRIVER.get('https://vk.com')
DRIVER.findElement(BY.css('#index_email')).clear()
    DRIVER.findElement(BY.css('#index_email')).sendKeys('test')
DRIVER.findElement(BY.css('#index_pass')).clear()
DRIVER.findElement(BY.css('#index_pass')).sendKeys('test')
DRIVER.findElement(BY.css('#index_login_button')).click()
// SEND A MESSAGE
DRIVER.wait(webdriver.until.elementLocated(BY.css('#l_msg')))
DRIVER.findElement(BY.css('#l_msg')).click()
DRIVER.findElement(BY.css('#im_dialogs_search')).sendKeys('Светлана')
// DRIVER.findElement(BY.css('#96384030cr')
DRIVER.findElement(BY.css('li:nth-child(1)')).click()
    DRIVER.findElement(BY.css('#im_editable0')).sendKeys('Hello!')
DRIVER.findElement(BY.css('#im_editable0')).submit()
        // DRIVER.findElement(BY.css(''))
// DRIVER.quit()
//     .nim-dialog--name-w ._im_dialog_link
