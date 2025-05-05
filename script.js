const products = [
  { title: "iPhone 14", price: "$799", image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6505/6505109_sd.jpg" },
  { title: "Samsung Galaxy S22", price: "$699", image: "https://d2g44tvvp35wo2.cloudfront.net/photo/global/2022/02/09/Samsung_Galaxy-S22-Ultra_Burgundy.jpg" },
  { title: "HP Laptop", price: "$499", image: "https://th.bing.com/th/id/OIP.OU1CoSplSgGv9VpKxYneSAHaFc?cb=iwc1&rs=1&pid=ImgDetMain" },
  { title: "MacBook Air", price: "$999", image: "https://th.bing.com/th/id/OIP.7qR3rCB_iKCCPzUUmHwx8gHaE7?cb=iwc1&rs=1&pid=ImgDetMain" },
  { title: "Noise Smartwatch", price: "$99", image: "https://1.bp.blogspot.com/-THuUjeHQcDk/XsVAP6ohXZI/AAAAAAAAblw/hbAzKBavnsIrsB3EhISMNfm4Es5j7aA9QCLcBGAsYHQ/s1600/710mNN9%252B3fL._SL1500_.jpg" },
  { title: "Sony Headphones", price: "$149", image: "https://www.bhphotovideo.com/images/images2500x2500/sony_wh1000xm4_b_wh_1000xm4_wireless_noise_canceling_over_ear_1582549.jpg" },
  { title: "Canon DSLR", price: "$599", image: "https://i5.walmartimages.com/asr/95e980d9-0bdb-41ac-8877-8b293360a7b1_1.0d0b555285b2159a778089ab4c060be6.jpeg" },
  { title: "JavaScript Book", price: "$29", image: "https://th.bing.com/th/id/OIP.VStFWCGswvZt3X5N4N5H-AHaG3?cb=iwc1&rs=1&pid=ImgDetMain" },
  { title: "Gaming Mouse", price: "$49", image: "https://m.media-amazon.com/images/I/51lQjtTMtFL._SL1100_.jpg" },
  { title: "Backpack", price: "$39", image: "https://th.bing.com/th/id/OIP.xw7GDLjG2Zd1LLX1xRkx5AHaHa?cb=iwc1&rs=1&pid=ImgDetMain" }
];

let cart = [];

function renderProducts(filteredProducts = products) {
  const container = document.getElementById("productContainer");
  container.innerHTML = "";

  filteredProducts.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.title}">
      <div class="product-info">
        <h3>${product.title}</h3>
        <p>${product.price}</p>
        <button onclick="addToCart('${product.title}')">Add to Cart</button>
      </div>
    `;
    container.appendChild(card);
  });
}

function addToCart(productName) {
  cart.push(productName);
  alert(`${productName} added!`);
  updateCartUI();
}

function updateCartUI() {
  const cartItems = document.getElementById("cartItems");
  const cartCount = document.getElementById("cart-count");
  const cartTotal = document.getElementById("cartTotal");

  cartItems.innerHTML = "";
  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = item;
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.style.marginLeft = "10px";
    removeBtn.onclick = () => {
      cart.splice(index, 1);
      updateCartUI();
    };
    li.appendChild(removeBtn);
    cartItems.appendChild(li);
  });

  cartCount.textContent = cart.length;
  cartTotal.textContent = cart.length;
}

function toggleCart() {
  document.getElementById("cartSidebar").classList.toggle("active");
}

function clearCart() {
  cart = [];
  updateCartUI();
}

document.getElementById("searchInput").addEventListener("input", function () {
  const keyword = this.value.toLowerCase();
  const filtered = products.filter(product =>
    product.title.toLowerCase().includes(keyword)
  );
  renderProducts(filtered);
});

renderProducts();
