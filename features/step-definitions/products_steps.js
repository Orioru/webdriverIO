const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect, $ } = require("@wdio/globals");

const ProductsPage = require("../pageobjects/products.page.js");

When("I press on the {string} product on the products page", async (itemNum) => {
    await ProductsPage.pressOnItem(itemNum);
  }
);

