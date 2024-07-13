
function addToCart() {
    // Get the available stock for this product
    const availableStock = parseInt(document.querySelector('.stock').innerText);
    console.log(availableStock);

    // Check if there's available stock
    if (availableStock > 0) {
        // Decrease the available stock by 1 (simulate adding to cart)
        const updatedStock = availableStock - 1;
         console.log(updatedStock)
        // Perform the action of adding the product to the cart
        // Here, you might update the cart data or perform other actions

        // Update the displayed stock
        document.querySelector('.stock').innerText = updatedStock;

        // Provide feedback that the product was added to the cart
        alert('Product added to cart!');

        // Disable the button if stock reaches 0
        if (updatedStock === 0) {
            document.querySelector('button').disabled = true;
        }
    } else {
        // If no stock is available, provide feedback to the user
        alert('Sorry, this product is out of stock!');
    }
}
