document.addEventListener("DOMContentLoaded", function () {
  const priceRange = document.getElementById("priceRange");
  const priceValue = document.getElementById("priceValue");
  const products = document.querySelectorAll(".product");

  priceRange.addEventListener("input", function () {
    const value = priceRange.value;
    // console.log(value);
    priceValue.textContent = `$${value}`;
    filterProducts(value);
  });

  function filterProducts(maxPrice) {
    // console.log(maxPrice);
    products.forEach((product) => {
      const productPrice = parseInt(product.getAttribute("data-price"), 10);
      if (productPrice <= maxPrice) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  }

  // Initial filter on page load
  filterProducts(priceRange.value);
});
