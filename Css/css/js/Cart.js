// ==============================
// MyShop Cart JavaScript
// ==============================

// Load cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

// Save cart
function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Display cart items
function renderCart() {

    if (!cartItems) return;

    cartItems.innerHTML = "";

    let total = 0;

    if (cart.length === 0) {

        cartItems.innerHTML = `
        <tr>
            <td colspan="5">Your cart is empty.</td>
        </tr>
        `;

        cartTotal.textContent = "$0";

        return;
    }

    cart.forEach((item, index) => {

        const itemTotal = item.price * item.quantity;

        total += itemTotal;

        cartItems.innerHTML += `
        <tr>

            <td>${item.name}</td>

            <td>$${item.price}</td>

            <td>
                <input
                    type="number"
                    min="1"
                    value="${item.quantity}"
                    onchange="updateQuantity(${index}, this.value)"
                >
            </td>

            <td>$${itemTotal}</td>

            <td>
                <button onclick="removeItem(${index})">
                    Remove
                </button>
            </td>

        </tr>
        `;
    });

    cartTotal.textContent = "$" + total.toFixed(2);

}

// Update
