const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');

describe('ValidarContactenos', function() {
  this.timeout(30000);
  let driver;
  let vars;

  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build();
    vars = {};
  });

  afterEach(async function() {
    await driver.quit();
  });

  it('ValidarContactenos', async function() {
    await driver.get('https://arrocha.com/');
    await driver.manage().window().setRect({ width: 1382, height: 736 });

    // Espera a que el elemento con linkText "Contáctanos" esté presente antes de realizar la acción
    const contactLinkElement = await driver.wait(until.elementLocated(By.linkText('Contáctanos')), 20000);
    await contactLinkElement.click();

    // Espera a que el elemento con id "contact_name" esté presente antes de realizar la acción
    const nameInputElement = await driver.wait(until.elementLocated(By.id('contact_name')), 20000);
    await nameInputElement.click();
    await nameInputElement.sendKeys('Juan');

    // Espera a que el elemento con id "contact_email" esté presente antes de realizar la acción
    const emailInputElement = await driver.wait(until.elementLocated(By.id('contact_email')), 20000);
    await emailInputElement.click();
    await emailInputElement.sendKeys('juan@gmail.com');

    // Espera a que el elemento con id "contact_phone" esté presente antes de realizar la acción
    const phoneInputElement = await driver.wait(until.elementLocated(By.id('contact_phone')), 20000);
    await phoneInputElement.click();
    await phoneInputElement.sendKeys('66782020');

    // Espera a que el elemento con id "contact_message" esté presente antes de realizar la acción
    const messageInputElement = await driver.wait(until.elementLocated(By.id('contact_message')), 20000);
    await messageInputElement.click();
    await messageInputElement.sendKeys('Test 3 universidad');

    // Espera a que el elemento con la clase ".contact-form-button" esté presente antes de realizar la acción
    const submitButtonElement = await driver.wait(until.elementLocated(By.css('.contact-form-button')), 20000);
    await submitButtonElement.click();
  });
});
