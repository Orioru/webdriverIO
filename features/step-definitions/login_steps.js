const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect, $ } = require("@wdio/globals");

const LoginPage = require("../pageobjects/login.page");

Given("I am on the {string} page", async (page) => {
  await browser.url('/')
});

When("I login with {string} and {string}", async (username, password) => {
  await LoginPage.login(username, password);
});

Then("I should see a flash message saying {string}", async (message) => {
  await expect(SecurePage.flashAlert).toBeExisting();
  await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});
