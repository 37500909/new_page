// Archivo: js/carrito.js
let cart = [];
let total = 0;

function addToCart() {
    // Simular que se agrega un producto al carrito
    let product = { name: "Torta artesanal", price: 20 };
    cart.push(product);
    total += product.price;

    // Actualizar el carrito en la interfaz
    document.getElementById("cart-items").innerHTML = cart
        .map(item => `<p>${item.name} - $${item.price}</p>`)
        .join("");
    document.getElementById("cart-total").innerText = `$${total.toFixed(2)}`;
}

// Botón de finalizar compra
document.getElementById("finalize-purchase").addEventListener("click", function() {
    if (cart.length === 0) {
        alert("El carrito está vacío.");
    } else {
        alert("Compra finalizada. ¡Gracias!");
        // Reiniciar carrito
        cart = [];
        total = 0;
        document.getElementById("cart-items").innerHTML = "";
        document.getElementById("cart-total").innerText = "$0.00";
    }
});
