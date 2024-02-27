const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect, $ } = require("@wdio/globals");
const ER = require("../../fixtures/expectedResults.json");

const LoginPage = require("../pageobjects/login.page");

Given("I am on the {string} page", async (page) => {
  await browser.url("/");
});

When("I login with {string} and {string}", async (username, password) => {
  await LoginPage.login(username, password);
});

Then("I should see the error login message", async () => {
  await expect(LoginPage.elements.alertErrorLogin()).toBeExisting();
  await expect(LoginPage.elements.alertErrorLogin()).toHaveText(ER.errorLoginMessage);
});

Then("I check I am on the login page", async () => {
  await expect(LoginPage.elements.inputUsername()).toBeExisting();
  await expect(LoginPage.elements.inputPassword()).toBeExisting();
});
