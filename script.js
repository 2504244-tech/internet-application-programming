function addToCart(productName) {
    const message = document.getElementById("cart-message");
    message.textContent = productName + " has been added to your cart!";
}

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const message = document.getElementById("form-message");

    message.textContent = "Thank you, " + name + "! Your message has been received.";
    this.reset();
});
