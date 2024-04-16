document.addEventListener('DOMContentLoaded', function() {
    fetch('products.json')
        .then(response => response.json())
        .then(products => {
            const productList = document.getElementById('product-list');
            products.forEach(product => {
                const prodElem = document.createElement('div');
                prodElem.className = 'product';
                prodElem.innerHTML = `
                    <h3>${product.name}</h3>
                    <img src="${product.image}" alt="${product.name}" style="width:100%">
                    <p>${product.description}</p>
                    <p>Price: $${product.price}</p>
                    <button onclick="addToCart(${product.id})">Add to Cart</button>
                `;
                productList.appendChild(prodElem);
            });
        });
});

function addToCart(productId) {
    console.log('Product added to cart with ID:', productId);
    // Implement cart functionality here
}
