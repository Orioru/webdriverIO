const { $ } = require("@wdio/globals");

class DetailProductPage {
  /**
   * selectors
   */
  elements = {
    addToCartButton: () => $("#add-to-cart-sauce-labs-backpack"),
    removeButton: () => $("#remove-sauce-labs-backpack")
  };

  /**
   * Press on the add to cart button on the detail product page
   * @returns {Promise<void>} - A Promise that resolves when the login process is complete.
   */
  async pressOnAddToCartButton() {
    await this.elements.addToCartButton().click();
  }

  
  /**
   * Press on the remove button on the detail product page
   * @returns {Promise<void>} - A Promise that resolves when the login process is complete.
   */
  async pressOnRemoveButton () {
    await this.elements.removeButton().click();
  }
}

module.exports = new DetailProductPage();
