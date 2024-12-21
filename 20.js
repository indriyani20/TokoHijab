let cart = [];

function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none'; // Sembunyikan semua section
    });
    document.getElementById(sectionId).style.display = 'block'; // Tampilkan section yang dipilih
}

function addToCart(productName, price) {
    const existingProduct = cart.find(item => item.name === productName);
    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({ name: productName, price: price, quantity: 1 });
    }
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');
    cartItems.innerHTML = ''; // Kosongkan item keranjang

    let total = 0;
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        cartItems.innerHTML += `<p>${item.name} - Rp ${item.price} x ${item.quantity} = Rp ${itemTotal}</p>`;
    });
    totalPrice.innerHTML = `Total: Rp ${total}`;
}
// Rating functionality
document.querySelectorAll('.rating').forEach(rating => {
    const stars = rating.querySelectorAll('.star');
    const ratingValue = rating.querySelector('.rating-value');

    stars.forEach(star => {
        star.addEventListener('click', () => {
            const value = star.getAttribute('data-value');
            ratingValue.textContent = value; // Update the displayed rating value

            // Remove 'selected' class from all stars
            stars.forEach(s => s.classList.remove('selected'));

            // Add 'selected' class to the clicked star and all previous stars
            star.classList.add('selected');
            let previousStar = star.previousElementSibling;
            while (previousStar) {
                previousStar.classList.add('selected');
                previousStar = previousStar.previousElementSibling;
            }
        });
    });
});