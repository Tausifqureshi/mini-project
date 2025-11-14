function sortProducts() {
  const productList = document.getElementById("productList");
  const products = Array.from(productList.getElementsByClassName("product"));
  const filter = document.getElementById("priceFilter").value;

  products.sort((a, b) => {
    const priceA = parseInt(a.getAttribute("data-price"));
    const priceB = parseInt(b.getAttribute("data-price"));

    if (filter === "lowToHigh") {
      return priceA - priceB; // //asendin me sort ye
      
    } else if (filter === "highToLow") {
      return priceB - priceA;  //desending me sort ye
    } else {
      return 0;
    }
  });

  products.forEach((product) => productList.appendChild(product));
}
