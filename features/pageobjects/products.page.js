const { $ } = require("@wdio/globals");


class ProductsPage {
  /**
   * selectors
   */
  elements = {
    productItemTitles: () => $$(".inventory_item_name"),
  };

  /**
   * Press on the title of the product which have the provided index
   *
   * @param {string} itemNum - The index of the product
   * @returns {Promise<void>} - A Promise that resolves when the login process is complete.
   */
  async pressOnItem(itemNum) {
    await this.elements.productItemTitles()[itemNum-1].click();
  }
}

module.exports = new ProductsPage();
