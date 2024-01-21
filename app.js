const readline = require("readline");

// Product Data
const products = [
  { id: 1, name: "Alienware Laptop", price: 1500 },
  { id: 2, name: "Asus Laptop", price: 1300 },
  { id: 3, name: "HP Laptop", price: 1200 },
  { id: 4, name: "Lenovo Laptop", price: 1000 },
  { id: 5, name: "Dell Laptop", price: 1100 },
  { id: 6, name: "Desktop", price: 900 },
];

const cart = [];

// Display product
function displayProducts() {
  console.log("Available Products:");
  console.log("--------------------");
  products.forEach((product) => {
    console.log(`${product.id}. ${product.name} - $${product.price}`);
  });
  console.log("--------------------");
}

// Add product to cart
function addToCart(productId, quantity) {
  const product = products.find((product) => product.id === productId);
  if (product) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product.name}(s) added to cart`);
    console.log("--------------------");
  } else {
    console.log("Invalid product ID.");
    console.log("--------------------");
  }
}

// Display shopping cart
function displayCart() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  console.log("Shopping cart:");
  console.log("--------------------");
  cart.forEach((item) => {
    const { product, quantity } = item;
    console.log(
      `${product.name} x ${quantity} - $${product.price * quantity}`
    );
  });
  console.log("--------------------");
  const total = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  console.log(`Total: $${total}`);
  console.log("--------------------");

   rl.question('Buy product("y or n"): ', (answer) => {
     if (answer === "y") {
       console.log("Purchased");
       rl.close();
     } else if (answer === "n") {
       rl.close();
       main(); // Continue shopping
     } else {
       console.log("Invalid input. Please enter 'y' or 'n'.");
       rl.close();
       displayCart(); // Ask again for valid input
     }
   });
}

// Main output
function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  console.log("Welcome to Computer Village");
  console.log("--------------------");
  displayProducts();

  rl.question(
    'Enter the product ID you want to add to cart (or type "x" to complete your purchase): ',
    (answer) => {
      if (answer === 'x') {
        displayCart();
        // Close the readline interface when done
      } else {
        const productId = parseInt(answer);
        if (!isNaN(productId) && productId >= 0) {
          rl.question('Enter the quantity: ', (quantity) => {
            const parsedQuantity = parseInt(quantity);
            if (!isNaN(parsedQuantity) && parsedQuantity >= 0) {
              addToCart(productId, parsedQuantity);
            } else {
              console.log('Invalid quantity. Please enter a valid number.');
            }
            main(); // Continue with the next product
          });
        } else {
          console.log('Invalid product ID. Please enter a valid ID.');
          main(); // Ask for another input
        }
      }
    }
  );
}

// Start the application
main()
