function addToCart() {
    const stockElement = document.querySelector('.stock');
    const buttonElement = document.querySelector('button');
    const messageElement = document.querySelector('.out-of-stock-message'); // New message element
    
    const availableStock = parseInt(stockElement.innerText);

    if (availableStock > 0) {
        const updatedStock = availableStock - 1;
        stockElement.innerText = updatedStock;
        alert('Product added to cart!');
 
        if (updatedStock === 0) {
            buttonElement.disabled = true;
            messageElement.style.display = 'block'; // Show the out of stock message
        }
    } else {
        messageElement.style.display = 'block'; // Show the out of stock message
    }
}
