$(document).ready(() => {
  const cartButton = $(".cart-button button");
  const cartDropdown = $(".cart-dropdown");

  /* --- Click Handlers --- */
  // CART BUTTON
  cartButton.on("click", () => {
    cartDropdown.toggle();
  });
  // PLUS BUTTON
  // MINUS BUTTON
});
