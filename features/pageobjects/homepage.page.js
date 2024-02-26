const { $ } = require("@wdio/globals");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePagePage {
  /**
   * define selectors using getter methods
   */
  get appLogo() {
    return $(".app_logo");
  }
}

module.exports = new HomePagePage();
