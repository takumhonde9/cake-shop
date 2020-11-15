let state = {
  cartDropdownActive: false,
};

$(document).ready(() => {
  const cartButton = $(".cart-button button");
  const cartDropdown = $(".cart-dropdown");

  // CART BUTTON -> Click
  cartButton.on("click", () => {
    state.cartDropdownActive ? cartDropdown.hide() : cartDropdown.show();
    // toggle state
    state = { ...state, cartDropdownActive: !state.cartDropdownActive };
  });

  // PLUS BUTTON -> Click
  // MINUS BUTTON -> Click
});
