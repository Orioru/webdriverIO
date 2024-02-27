const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect, $ } = require("@wdio/globals");

const DetailProductPage = require("../pageobjects/detailProduct.page");

When("I press on Add to cart button", async () => {
    await DetailProductPage.pressOnAddToCartButton();
});

When("I press on remove button", async () =>{
  await DetailProductPage.pressOnRemoveButton();
})
