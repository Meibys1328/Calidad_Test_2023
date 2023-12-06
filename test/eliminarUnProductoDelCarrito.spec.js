const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');

describe('EliminarUnProductoDelCarrito', function() {
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

  it('EliminarUnProductoDelCarrito', async function() {
    await driver.get('https://arrocha.com/');
    await driver.manage().window().setRect({ width: 1382, height: 736 });

    // Espera a que el elemento con id "boost-pfs-search-box-0" esté presente antes de realizar la acción
    const searchBoxElement = await driver.wait(until.elementLocated(By.id('boost-pfs-search-box-0')), 10000);
    await searchBoxElement.click();

    // Espera a que el elemento con id "boost-pfs-search-box-0" esté presente antes de realizar la acción
    await searchBoxElement.sendKeys('Crema');

    // Espera a que el elemento con linkText "Bioland Crema Fijadora Argán 175Ml" esté presente antes de realizar la acción
    const productLinkElement = await driver.wait(until.elementLocated(By.linkText('Bioland Crema Fijadora Argán 175Ml')), 10000);
    await productLinkElement.click();

    // Espera a que el elemento con el selector ".product-form--atc-button" esté presente antes de realizar la acción
    const addToCartElement = await driver.wait(until.elementLocated(By.css('.product-form--atc-button')), 10000);
    await addToCartElement.click();

    // Espera a que el elemento con el selector ".cart-item--remove-link" esté presente antes de realizar la acción
    const removeLinkElement = await driver.wait(until.elementLocated(By.css('.cart-item--remove-link')), 15000);
    await removeLinkElement.click();
  });
});
