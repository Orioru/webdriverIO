const { $ } = require("@wdio/globals");


class CommonPage {
  /**
   * selectors
   */
  elements = {
    appLogo: () => $(".app_logo"),
    menuIcon: () => $(".bm-burger-button"),
    sideMenu: () => $('.bm-item-list'),
    logoutButton: () => $('#logout_sidebar_link'),
    cartIconBadge: () => $(".shopping_cart_badge")
  };

   /**
   * Press on the menu icon in order to open the side menu
   * @returns {Promise<void>} - A Promise that resolves when the login process is complete.
   */
  async pressOnMenuIcon(){
    await this.elements.menuIcon().click();
  }

  /**
   * Press on the logout button on the side menu 
   * @returns {Promise<void>} - A Promise that resolves when the login process is complete.
   */
  async pressOnLogoutButton(){
    await this.elements.logoutButton().click();
  }

}

module.exports = new CommonPage();