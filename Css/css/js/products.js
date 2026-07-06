// ==============================
// MyShop Products JavaScript
// ==============================

const productContainer = document.getElementById("product-list");

// Load products
async function loadProducts() {

    try {

        const response = await fetch("data/products.json");

        const products = await response.json();

        displayProducts(products);

    } catch (error) {

        console.error("Failed to load products:", error);

    }

}

// Display product cards
function displayProducts(products) {

    if (!productContainer) return;

    productContainer.innerHTML = "";

    products.forEach(product => {

        productContainer.innerHTML += `
        <div class="product-card">

            <img src="${product.image}" alt="${product.name}">

            <div class="product-info">

                <h3>${product.name}</h3>

                <p>${product.description}</p>

                <div class="price">$${product.price}</div>

                <button
                    class="btn"
                    onclick='addToCart(${JSON.stringify(product)})'>
                    Add to Cart
                </button>

            </div>

        </div>
        `;
    });

}

// Search products
function searchProducts(keyword) {

    fetch("data/products.json")
        .then(res => res.json())
        .then(products => {

            const filtered = products.filter(product =>
                product.name.toLowerCase().includes(keyword.toLowerCase())
            );

            displayProducts(filtered);

        });

}

loadProducts();
