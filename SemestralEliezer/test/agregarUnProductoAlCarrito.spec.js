const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');

describe('AgregarUnProductoAlCarrito', function() {
  this.timeout(30000);
  let driver;
  let vars;

  beforeEach(async function() {
    try {
      driver = await new Builder().forBrowser('chrome').build();
      vars = {};
    } catch (error) {
      console.error('Error during driver setup:', error);
    }
  });

  afterEach(async function() {
    if (driver) {
      await driver.quit();
    }
  });

  it('AgregarUnProductoAlCarrito', async function() {
    await driver.get('https://arrocha.com/');
    await driver.manage().window().setRect({ width: 1382, height: 736 });

    // Espera a que el elemento con linkText "Tiendas" esté presente antes de realizar la acción
    const tiendasElement = await driver.wait(until.elementLocated(By.linkText('Tiendas')), 10000);
    await driver.actions({ bridge: true }).move(tiendasElement).perform();

    // Espera a que el elemento con id "boost-pfs-search-box-0" esté presente antes de realizar la acción
    const searchBoxElement = await driver.wait(until.elementLocated(By.id('boost-pfs-search-box-0')), 10000);
    await searchBoxElement.click();

    // Espera a que el elemento con id "boost-pfs-search-box-0" esté presente antes de realizar la acción
    await searchBoxElement.sendKeys('Crema');

    // Espera a que el elemento con el selector ".boost-pfs-search-suggestion-item:nth-child(2) .boost-pfs-search-suggestion-product-title" esté presente antes de realizar la acción
    const suggestionElement = await driver.wait(until.elementLocated(By.css('.boost-pfs-search-suggestion-item:nth-child(2) .boost-pfs-search-suggestion-product-title')), 15000);
    await suggestionElement.click();

  });
});
