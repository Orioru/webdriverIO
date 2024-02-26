const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect, $ } = require("@wdio/globals");

const HomePage = require("../pageobjects/homepage.page.js");

Then("I should see the saucelabs homepage", async () => {
  await expect(HomePage.appLogo).toBeExisting();
  await expect(HomePage.appLogo).toHaveText("Swag Labs");
});
