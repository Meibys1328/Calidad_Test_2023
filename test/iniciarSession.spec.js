const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');

describe('IniciarSession', function() {
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

  it('IniciarSession', async function() {
    await driver.get('https://arrocha.com/');
    await driver.manage().window().setRect({ width: 1382, height: 736 });

    // Espera a que el elemento con linkText "Ingresar" esté presente antes de realizar la acción
    const loginLinkElement = await driver.wait(until.elementLocated(By.linkText('Ingresar')), 5000);
    await loginLinkElement.click();

    // Espera a que el elemento con id "customer_email" esté presente antes de realizar la acción
    const emailInputElement = await driver.wait(until.elementLocated(By.id('customer_email')), 5000);
    await emailInputElement.click();
    await emailInputElement.sendKeys('danielastar3102@gmail.com');

    // Espera a que el elemento con id "customer_password" esté presente antes de realizar la acción
    const passwordInputElement = await driver.wait(until.elementLocated(By.id('customer_password')), 5000);
    await passwordInputElement.click();
    await passwordInputElement.sendKeys('daniela1234*');

    // Espera a que el elemento con el selector ".form-action--submit" esté presente antes de realizar la acción
    const submitButtonElement = await driver.wait(until.elementLocated(By.css('.form-action--submit')), 5000);
    await submitButtonElement.click();
  });
});
