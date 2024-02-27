const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect, $ } = require("@wdio/globals");

const CommonPage = require("../pageobjects/common.page");

When("I press on the menu icon", async () => {
  CommonPage.pressOnMenuIcon();
});

When("I press on logout", async () => {
  CommonPage.pressOnLogoutButton();
});

Then("I should see the saucelabs products page", async () => {
  await expect(CommonPage.elements.appLogo()).toBeExisting();
  await expect(CommonPage.elements.appLogo()).toHaveText("Swag Labs");
});

Then("I check the cart has {string} item added", async (numItem) => {
  await expect(CommonPage.elements.cartIconBadge()).toBeExisting();
  await expect(CommonPage.elements.cartIconBadge()).toHaveText(numItem);
});

Then("I check the cart has no items", async () => {
  await expect(CommonPage.elements.cartIconBadge()).not.toBeExisting();
});

Then("I check the side menu appears", async () => {
  await CommonPage.elements.sideMenu().waitForDisplayed(3000);
});
