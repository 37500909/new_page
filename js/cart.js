// Inicializamos el carrito vacío
let cart = [];

// Función para agregar un producto al carrito
function addToCart(productName, productPrice) {
    // Crear un objeto producto
    const product = {
        name: productName,
        price: productPrice,
        quantity: 1,
    };

    // Verificar si el producto ya está en el carrito
    const existingProductIndex = cart.findIndex(item => item.name === productName);

    if (existingProductIndex !== -1) {
        // Si ya existe, aumentar la cantidad
        cart[existingProductIndex].quantity += 1;
    } else {
        // Si no existe, agregar al carrito
        cart.push(product);
    }

    // Actualizar el carrito en pantalla
    updateCartDisplay();
}

// Función para actualizar el carrito en la interfaz
function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    let total = 0;

    // Limpiar el contenedor del carrito
    cartItemsContainer.innerHTML = '';

    // Recorrer los productos del carrito y agregarlos a la lista
    cart.forEach(item => {
        const itemElement = document.createElement('li');
        itemElement.textContent = `${item.name} (x${item.quantity}) - $${item.price * item.quantity}`;
        cartItemsContainer.appendChild(itemElement);

        // Calcular el total
        total += item.price * item.quantity;
    });

    // Actualizar el total en la interfaz
    cartTotalElement.textContent = total.toFixed(2);
}

// Función para finalizar la compra (opcional)
document.getElementById('checkout-btn').addEventListener('click', function() {
    if (cart.length > 0) {
        alert('Gracias por tu compra. Procesando pedido...');
        cart = []; // Limpiar el carrito después de la compra
        updateCartDisplay(); // Actualizar la interfaz
    } else {
        alert('Tu carrito está vacío.');
    }
});
