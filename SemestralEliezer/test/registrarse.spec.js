const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');

describe('Registrarse', function() {
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

  it('Registrarse', async function() {
    await driver.get('https://arrocha.com/');
    await driver.manage().window().setRect({ width: 1382, height: 736 });

    // Espera a que el elemento con linkText "Ingresar" esté presente antes de realizar la acción
    const loginLinkElement = await driver.wait(until.elementLocated(By.linkText('Ingresar')), 50000);
    await loginLinkElement.click();

    // Realiza un desplazamiento hacia abajo en la página
    await driver.executeScript('window.scrollTo(0, 100)');

    // Espera a que el elemento con id "customer_register_link" esté presente antes de realizar la acción
    const registerLinkElement = await driver.wait(until.elementLocated(By.id('customer_register_link')), 50000);
    await registerLinkElement.click();

    // Espera a que el elemento con id "686772" esté presente antes de realizar la acción
    const firstNameElement = await driver.wait(until.elementLocated(By.id('686772')), 50000);
    await firstNameElement.click();
    await firstNameElement.sendKeys('Daniela');

    // Espera a que el elemento con id "119233" esté presente antes de realizar la acción
    const lastNameElement = await driver.wait(until.elementLocated(By.id('119233')), 50000);
    await lastNameElement.click();
    await lastNameElement.sendKeys('Reyes');

    // Espera a que el elemento con id "126009" esté presente antes de realizar la acción
    const phoneNumberElement = await driver.wait(until.elementLocated(By.id('126009')), 50000);
    await phoneNumberElement.click();
    await phoneNumberElement.sendKeys('8-123-456');

    // Espera a que el elemento con id "109309" esté presente antes de realizar la acción
    const birthdateElement = await driver.wait(until.elementLocated(By.id('109309')), 50000);
    await birthdateElement.click();
    await birthdateElement.sendKeys('31-01-2002');

    // Espera a que el elemento con id "value1-102623option1" esté presente antes de realizar la acción
    const genderElement = await driver.wait(until.elementLocated(By.id('value1-102623option1')), 50000);
    await genderElement.click();

    // Espera a que el elemento con id "169789" esté presente antes de realizar la acción
    const emailElement = await driver.wait(until.elementLocated(By.id('169789')), 50000);
    await emailElement.click();
    await emailElement.sendKeys('daniela@gmail.com');

    // Espera a que el elemento con id "726232" esté presente antes de realizar la acción
    const phoneElement = await driver.wait(until.elementLocated(By.id('726232')), 50000);
    await phoneElement.click();
    await phoneElement.sendKeys('+507 2211 4420');

    // Espera a que el elemento con id "199093" esté presente antes de realizar la acción
    const termsCheckboxElement = await driver.wait(until.elementLocated(By.id('199093')), 50000);
    await termsCheckboxElement.click();

    // Espera a que el elemento con id "209151" esté presente antes de realizar la acción
    const submitButtonElement = await driver.wait(until.elementLocated(By.id('209151')), 50000);
    await submitButtonElement.click();

    // Realiza un desplazamiento hacia abajo en la página
    await driver.executeScript('window.scrollTo(0, 159)');
  });
});
