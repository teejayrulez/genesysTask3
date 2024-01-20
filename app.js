//Product Data
const products = [
  { id: 1, name: "Alienware Laptop", price: 1500 },
  { id: 2, name: "Asus Laptop", price: 1300 },
  { id: 3, name: "HP Laptop", price: 1200 },
  { id: 4, name: "Lenovo Laptop", price: 1000 },
  { id: 5, name: "Dell Laptop", price: 1100 },
  { id: 6, name: "Desktop", price: 900 },
];

const cart = [];
const readline = require('readline');

// Display product
function displayProducts() {
  console.log("Available Products:");
  console.log("--------------------");
  products.forEach((products) => {
    console.log(`${products.id}. ${products.name} - $${products.price}`);
  });
  console.log("--------------------");
};

//Add product to cart
function addToCart(productId, quantity) {
    const product = products.find(products => products.id === productId);
    if (product) {
        cart.push({ ...products, quantity });
        console.log(`${quantity} ${products.name}(s) added to cart`);
    } else {
        console.log('Invalid product ID.');
    }
};

//Display shopping cart
function displayCart() {
    console.log('Shopping cart:');
    console.log('--------------------');
    cart.forEach(item => {
        console.log(`${item.name} x ${item.quantity} - $${item.price * item.quantity}`);
    });
    console.log('--------------------');
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    console.log(`Total: $${total}`);
};

displayProducts()
displayCart()
addToCart()