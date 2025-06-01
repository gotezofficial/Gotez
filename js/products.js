// Product data for dynamic loading
const products = [
  {
    id: 1,
    name: "Blowjob Is Better Than No Job - T-Shirt",
    price: 24.99,
    originalPrice: 34.99,
    discount: "28%",
    description: "Make a bold statement with our \"Blowjob Is Better Than No Job\" t-shirt. Perfect for those who appreciate edgy humor and aren't afraid to show it.",
    features: [
      "Premium quality cotton blend",
      "Soft and comfortable fabric",
      "Durable print that won't fade",
      "Regular fit, true to size",
      "Available in multiple colors"
    ],
    category: "tshirts",
    gender: "unisex",
    tags: ["bestseller", "funny", "edgy"],
    colors: ["Black", "White", "Gray", "Charcoal"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    ],
    rating: 4.8,
    reviewCount: 124
  },
  {
    id: 2,
    name: "Wish You Were A Beer - Gym Tank",
    price: 29.99,
    originalPrice: 29.99,
    discount: null,
    description: "Hit the gym in style with our \"Wish You Were A Beer\" tank top. Perfect for those who love fitness but also appreciate a good beer after a workout.",
    features: [
      "Lightweight and breathable material",
      "Moisture-wicking fabric",
      "Perfect for workouts or casual wear",
      "Athletic fit",
      "Reinforced stitching for durability"
    ],
    category: "tanks",
    gender: "unisex",
    tags: ["new", "gym", "funny"],
    colors: ["Black", "Gray", "Navy", "Red"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    ],
    rating: 4.6,
    reviewCount: 87
  },
  {
    id: 3,
    name: "Googled My Symptoms - Oversize Shirt",
    price: 34.99,
    originalPrice: 44.99,
    discount: "22%",
    description: "Our \"Googled My Symptoms Turns Out I Just Need A Blowjob\" oversized shirt is perfect for those who love dark humor and a relaxed fit.",
    features: [
      "Oversized, relaxed fit",
      "Premium cotton blend",
      "Drop shoulder design",
      "Reinforced seams",
      "Pre-shrunk fabric"
    ],
    category: "oversized",
    gender: "unisex",
    tags: ["sale", "edgy", "funny"],
    colors: ["Black", "White", "Gray"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    ],
    rating: 4.7,
    reviewCount: 103
  },
  {
    id: 4,
    name: "Dark Humor Hoodie",
    price: 49.99,
    originalPrice: 49.99,
    discount: null,
    description: "Stay warm and edgy with our Dark Humor Hoodie. The perfect blend of comfort and attitude for those with a twisted sense of humor.",
    features: [
      "Heavyweight fleece material",
      "Soft inner lining",
      "Kangaroo pocket",
      "Adjustable drawstring hood",
      "Ribbed cuffs and hem"
    ],
    category: "hoodies",
    gender: "unisex",
    tags: ["comfort", "edgy"],
    colors: ["Black", "Gray", "Navy"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    ],
    rating: 4.9,
    reviewCount: 156
  },
  {
    id: 5,
    name: "Sarcasm Loading T-Shirt",
    price: 26.99,
    originalPrice: 26.99,
    discount: null,
    description: "Our \"Sarcasm Loading\" t-shirt is perfect for those who appreciate wit and aren't afraid to show their sarcastic side.",
    features: [
      "100% cotton material",
      "Comfortable regular fit",
      "Durable screen printing",
      "Pre-shrunk fabric",
      "Double-stitched sleeves and hem"
    ],
    category: "tshirts",
    gender: "unisex",
    tags: ["funny", "sarcastic"],
    colors: ["Black", "White", "Gray", "Blue"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    images: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    ],
    rating: 4.5,
    reviewCount: 92
  },
  {
    id: 6,
    name: "Savage Mode Hoodie",
    price: 44.99,
    originalPrice: 44.99,
    discount: null,
    description: "Embrace your inner savage with our Savage Mode Hoodie. Comfortable, stylish, and perfect for making a statement.",
    features: [
      "Heavyweight blend of cotton and polyester",
      "Warm fleece lining",
      "Kangaroo pocket",
      "Adjustable hood",
      "Ribbed cuffs and waistband"
    ],
    category: "hoodies",
    gender: "unisex",
    tags: ["new", "edgy"],
    colors: ["Black", "Gray", "Red"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    ],
    rating: 4.7,
    reviewCount: 78
  },
  {
    id: 7,
    name: "Not Today Satan T-Shirt",
    price: 24.99,
    originalPrice: 24.99,
    discount: null,
    description: "Tell the world you're not in the mood with our \"Not Today Satan\" t-shirt. A perfect blend of attitude and comfort.",
    features: [
      "Soft cotton blend",
      "Relaxed fit",
      "Durable print",
      "Pre-washed to prevent shrinkage",
      "Reinforced shoulder seams"
    ],
    category: "tshirts",
    gender: "unisex",
    tags: ["attitude", "funny"],
    colors: ["Black", "White", "Red", "Purple"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    images: [
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    ],
    rating: 4.6,
    reviewCount: 112
  },
  {
    id: 8,
    name: "Sorry I'm Late I Didn't Want to Come - T-Shirt",
    price: 24.99,
    originalPrice: 24.99,
    discount: null,
    description: "Our \"Sorry I'm Late I Didn't Want to Come\" t-shirt is perfect for introverts and anyone who'd rather be at home.",
    features: [
      "100% cotton material",
      "Comfortable regular fit",
      "High-quality screen printing",
      "Pre-shrunk fabric",
      "Reinforced stitching"
    ],
    category: "tshirts",
    gender: "unisex",
    tags: ["bestseller", "funny", "introvert"],
    colors: ["Black", "White", "Gray", "Blue"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    images: [
      "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    ],
    rating: 4.8,
    reviewCount: 143
  },
  // Dog clothing products
  {
    id: 101,
    name: "Bad to the Bone - Dog T-Shirt",
    price: 19.99,
    originalPrice: 24.99,
    discount: "20%",
    description: "Let your furry friend show their attitude with our \"Bad to the Bone\" dog t-shirt. Stylish, comfortable, and perfect for dogs with personality.",
    features: [
      "Soft, breathable cotton blend",
      "Easy to put on and take off",
      "Machine washable",
      "Comfortable fit that won't restrict movement",
      "Available in multiple sizes for all breeds"
    ],
    category: "dog-tshirts",
    gender: "dog",
    tags: ["new", "funny", "pets"],
    colors: ["Black", "Red", "Blue"],
    sizes: ["XS (Chihuahua)", "S (Jack Russell)", "M (Border Collie)", "L (Labrador)", "XL (German Shepherd)"],
    images: [
      "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1583511655826-05700442b31b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    ],
    rating: 4.9,
    reviewCount: 68
  },
  {
    id: 102,
    name: "I'm With Stupid - Dog Hoodie",
    price: 29.99,
    originalPrice: 29.99,
    discount: null,
    description: "Keep your pup warm and stylish with our \"I'm With Stupid\" dog hoodie. Perfect for walks on chilly days and getting laughs at the dog park.",
    features: [
      "Warm fleece material",
      "Hood for extra warmth",
      "Easy-access leash hole",
      "Machine washable",
      "Comfortable elastic leg openings"
    ],
    category: "dog-hoodies",
    gender: "dog",
    tags: ["funny", "pets", "winter"],
    colors: ["Gray", "Black", "Navy"],
    sizes: ["XS (Chihuahua)", "S (Jack Russell)", "M (Border Collie)", "L (Labrador)", "XL (German Shepherd)"],
    images: [
      "https://images.unsplash.com/photo-1583336663277-620dc1996580?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    ],
    rating: 4.7,
    reviewCount: 42
  },
  {
    id: 103,
    name: "Resting Bark Face - Dog Bandana",
    price: 14.99,
    originalPrice: 14.99,
    discount: null,
    description: "Add some attitude to your dog's outfit with our \"Resting Bark Face\" bandana. Stylish, comfortable, and perfect for dogs with attitude.",
    features: [
      "100% cotton material",
      "Triangle design for easy fitting",
      "Machine washable",
      "Double-sided print",
      "One size fits most dogs"
    ],
    category: "dog-accessories",
    gender: "dog",
    tags: ["bestseller", "funny", "pets", "accessories"],
    colors: ["Red", "Black", "Blue", "Purple"],
    sizes: ["One Size"],
    images: [
      "https://images.unsplash.com/photo-1583337426008-1108919f4b2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    ],
    rating: 4.8,
    reviewCount: 89
  }
];

// Cart data
let cart = {
  items: [],
  subtotal: 0,
  shipping: 0,
  total: 0
};

// Function to add item to cart
function addToCart(productId, quantity, color, size) {
  const product = products.find(p => p.id === productId);
  if (!product) return false;
  
  // Check if item already exists in cart
  const existingItemIndex = cart.items.findIndex(item => 
    item.id === productId && item.color === color && item.size === size
  );
  
  if (existingItemIndex >= 0) {
    // Update quantity if item exists
    cart.items[existingItemIndex].quantity += quantity;
  } else {
    // Add new item if it doesn't exist
    cart.items.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity: quantity,
      color: color,
      size: size
    });
  }
  
  // Update cart totals
  updateCartTotals();
  
  return true;
}

// Function to remove item from cart
function removeFromCart(index) {
  if (index >= 0 && index < cart.items.length) {
    cart.items.splice(index, 1);
    updateCartTotals();
    return true;
  }
  return false;
}

// Function to update item quantity in cart
function updateCartItemQuantity(index, quantity) {
  if (index >= 0 && index < cart.items.length) {
    if (quantity <= 0) {
      return removeFromCart(index);
    } else {
      cart.items[index].quantity = quantity;
      updateCartTotals();
      return true;
    }
  }
  return false;
}

// Function to update cart totals
function updateCartTotals() {
  cart.subtotal = cart.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  
  // Free shipping for orders over $50
  cart.shipping = cart.subtotal >= 50 ? 0 : 5.99;
  
  cart.total = cart.subtotal + cart.shipping;
  
  // Save cart to localStorage
  localStorage.setItem('gotezCart', JSON.stringify(cart));
  
  // Update cart UI
  updateCartUI();
}

// Function to load cart from localStorage
function loadCart() {
  const savedCart = localStorage.getItem('gotezCart');
  if (savedCart) {
    cart = JSON.parse(savedCart);
    updateCartUI();
  }
}

// Function to update cart UI
function updateCartUI() {
  const cartCount = document.getElementById('cart-count');
  const cartItems = document.getElementById('cart-items');
  const cartSubtotal = document.getElementById('cart-subtotal');
  const cartShipping = document.getElementById('cart-shipping');
  const cartTotal = document.getElementById('cart-total');
  const cartEmpty = document.getElementById('cart-empty');
  const cartContent = document.getElementById('cart-content');
  
  if (cartCount) {
    cartCount.textContent = cart.items.reduce((total, item) => total + item.quantity, 0);
  }
  
  if (cartItems) {
    cartItems.innerHTML = '';
    
    cart.items.forEach((item, index) => {
      const cartItem = document.createElement('div');
      cartItem.className = 'cart-item';
      cartItem.innerHTML = `
        <div class="cart-item-image">
          <img src="${item.image}" alt="${item.name}">
        </div>
        <div class="cart-item-details">
          <h4>${item.name}</h4>
          <div class="cart-item-meta">
            <span>Color: ${item.color}</span>
            <span>Size: ${item.size}</span>
          </div>
          <div class="cart-item-price">$${item.price.toFixed(2)}</div>
          <div class="cart-item-quantity">
            <button class="quantity-btn minus" onclick="updateCartItemQuantity(${index}, ${item.quantity - 1})">-</button>
            <span>${item.quantity}</span>
            <button class="quantity-btn plus" onclick="updateCartItemQuantity(${index}, ${item.quantity + 1})">+</button>
          </div>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart(${index})">
          <i class="fas fa-times"></i>
        </button>
      `;
      cartItems.appendChild(cartItem);
    });
  }
  
  if (cartSubtotal) {
    cartSubtotal.textContent = `$${cart.subtotal.toFixed(2)}`;
  }
  
  if (cartShipping) {
    cartShipping.textContent = cart.shipping === 0 ? 'Free' : `$${cart.shipping.toFixed(2)}`;
  }
  
  if (cartTotal) {
    cartTotal.textContent = `$${cart.total.toFixed(2)}`;
  }
  
  if (cartEmpty && cartContent) {
    if (cart.items.length === 0) {
      cartEmpty.style.display = 'block';
      cartContent.style.display = 'none';
    } else {
      cartEmpty.style.display = 'none';
      cartContent.style.display = 'block';
    }
  }
}

// Function to toggle cart panel
function toggleCart() {
  const cartPanel = document.getElementById('cart-panel');
  if (cartPanel) {
    cartPanel.classList.toggle('active');
    
    // Update cart UI when opened
    if (cartPanel.classList.contains('active')) {
      updateCartUI();
    }
  }
}

// Function to load product details
function loadProductDetails() {
  // Get product ID from URL parameter
  const urlParams = new URLSearchParams(window.location.search);
  const productId = parseInt(urlParams.get('id')) || 1; // Default to first product if no ID
  
  // Find the product
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  // Update page title
  document.title = `${product.name} - GoteZ`;
  
  // Update breadcrumb
  const breadcrumbProduct = document.querySelector('.breadcrumb span');
  if (breadcrumbProduct) {
    breadcrumbProduct.textContent = product.name;
  }
  
  // Update product images
  const mainImage = document.getElementById('main-product-image');
  const thumbnails = document.querySelectorAll('.thumbnail');
  
  if (mainImage) {
    mainImage.src = product.images[0];
    mainImage.alt = product.name;
  }
  
  thumbnails.forEach((thumbnail, index) => {
    if (index < product.images.length) {
      thumbnail.setAttribute('data-image', product.images[index]);
      const img = thumbnail.querySelector('img');
      if (img) {
        img.src = product.images[index];
        img.alt = `${product.name} - View ${index + 1}`;
      }
    }
  });
  
  // Update product info
  const productTitle = document.querySelector('.product-info h1');
  const currentPrice = document.querySelector('.current-price');
  const originalPrice = document.querySelector('.original-price');
  const discount = document.querySelector('.discount');
  const description = document.querySelector('.product-description p');
  const features = document.querySelector('.product-description ul');
  
  if (productTitle) productTitle.textContent = product.name;
  if (currentPrice) currentPrice.textContent = `$${product.price.toFixed(2)}`;
  
  if (originalPrice) {
    if (product.originalPrice > product.price) {
      originalPrice.textContent = `$${product.originalPrice.toFixed(2)}`;
      originalPrice.style.display = 'inline';
    } else {
      originalPrice.style.display = 'none';
    }
  }
  
  if (discount) {
    if (product.discount) {
      discount.textContent = `SAVE ${product.discount}`;
      discount.style.display = 'inline';
    } else {
      discount.style.display = 'none';
    }
  }
  
  if (description) description.textContent = product.description;
  
  if (features) {
    features.innerHTML = '';
    product.features.forEach(feature => {
      const li = document.createElement('li');
      li.textContent = feature;
      features.appendChild(li);
    });
  }
  
  // Update color options
  const colorOptions = document.querySelector('.color-options');
  const selectedColor = document.querySelector('.selected-color span');
  
  if (colorOptions) {
    colorOptions.innerHTML = '';
    product.colors.forEach(color => {
      const colorBtn = document.createElement('button');
      colorBtn.className = 'color-btn';
      colorBtn.setAttribute('data-color', color);
      
      // Set background color based on color name
      let bgColor;
      switch (color.toLowerCase()) {
        case 'black': bgColor = '#000000'; break;
        case 'white': bgColor = '#FFFFFF'; break;
        case 'gray': bgColor = '#6c757d'; break;
        case 'charcoal': bgColor = '#343a40'; break;
        case 'navy': bgColor = '#0a1f44'; break;
        case 'red': bgColor = '#dc3545'; break;
        case 'blue': bgColor = '#007bff'; break;
        case 'purple': bgColor = '#6f42c1'; break;
        default: bgColor = '#000000';
      }
      
      colorBtn.style.backgroundColor = bgColor;
      
      // Add border for white color
      if (color.toLowerCase() === 'white') {
        colorBtn.style.border = '1px solid #ddd';
      }
      
      // Set first color as active
      if (color === product.colors[0]) {
        colorBtn.classList.add('active');
        if (selectedColor) selectedColor.textContent = color;
      }
      
      colorOptions.appendChild(colorBtn);
    });
  }
  
  // Update size options
  const sizeOptions = document.querySelector('.size-options');
  
  if (sizeOptions) {
    sizeOptions.innerHTML = '';
    product.sizes.forEach(size => {
      const sizeBtn = document.createElement('button');
      sizeBtn.className = 'size-btn';
      sizeBtn.setAttribute('data-size', size);
      sizeBtn.textContent = size;
      
      // Set medium size as active by default
      if (size === 'M') {
        sizeBtn.classList.add('active');
      }
      
      sizeOptions.appendChild(sizeBtn);
    });
  }
  
  // Update categories
  const categories = document.querySelector('.meta-item a[href*="category"]');
  if (categories) {
    categories.textContent = product.category.charAt(0).toUpperCase() + product.category.slice(1);
    categories.href = `products.html?category=${product.category}`;
  }
  
  // Update rating
  const ratingStars = document.querySelectorAll('.product-rating .stars i');
  const ratingCount = document.querySelector('.rating-count');
  
  if (ratingStars.length > 0) {
    // Reset all stars
    ratingStars.forEach(star => {
      star.className = 'far fa-star';
    });
    
    // Set full stars
    const fullStars = Math.floor(product.rating);
    for (let i = 0; i < fullStars; i++) {
      ratingStars[i].className = 'fas fa-star';
    }
    
    // Set half star if needed
    if (product.rating % 1 >= 0.5 && fullStars < 5) {
      ratingStars[fullStars].className = 'fas fa-star-half-alt';
    }
  }
  
  if (ratingCount) {
    ratingCount.textContent = `${product.rating.toFixed(1)} (${product.reviewCount} reviews)`;
  }
  
  // Set up Add to Cart button
  const addToCartBtn = document.querySelector('.add-to-cart-btn');
  
  if (addToCartBtn) {
    addToCartBtn.addEventListener('click', () => {
      const color = document.querySelector('.color-btn.active').getAttribute('data-color');
      const size = document.querySelector('.size-btn.active').getAttribute('data-size');
      const quantity = parseInt(document.querySelector('.quantity-input').value);
      
      addToCart(productId, quantity, color, size);
      
      // Show cart panel
      toggleCart();
    });
  }
}

// Function to load products on products page
function loadProducts() {
  const productGrid = document.querySelector('.product-grid');
  if (!productGrid) return;
  
  // Get filter parameters from URL
  const urlParams = new URLSearchParams(window.location.search);
  const categoryFilter = urlParams.get('category');
  const genderFilter = urlParams.get('gender');
  
  // Filter products based on URL parameters
  let filteredProducts = [...products];
  
  if (categoryFilter) {
    filteredProducts = filteredProducts.filter(p => p.category === categoryFilter);
    
    // Check category checkboxes
    const categoryCheckbox = document.getElementById(`category-${categoryFilter}`);
    if (categoryCheckbox) {
      categoryCheckbox.checked = true;
    }
  }
  
  if (genderFilter) {
    filteredProducts = filteredProducts.filter(p => p.gender === genderFilter);
    
    // Check gender checkboxes
    const genderCheckbox = document.getElementById(`gender-${genderFilter}`);
    if (genderCheckbox) {
      genderCheckbox.checked = true;
    }
  }
  
  // Clear product grid
  productGrid.innerHTML = '';
  
  // Add filtered products to grid
  filteredProducts.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    
    let tagsHTML = '';
    if (product.tags && product.tags.includes('bestseller')) {
      tagsHTML += '<span class="tag tag-bestseller">Bestseller</span>';
    } else if (product.tags && product.tags.includes('new')) {
      tagsHTML += '<span class="tag tag-new">New</span>';
    } else if (product.discount) {
      tagsHTML += '<span class="tag tag-sale">Sale</span>';
    }
    
    const tagsDiv = tagsHTML ? `<div class="product-tags">${tagsHTML}</div>` : '';
    
    const discountHTML = product.discount 
      ? `<span class="original-price">$${product.originalPrice.toFixed(2)}</span>` 
      : '';
    
    productCard.innerHTML = `
      <div class="product-image">
        ${tagsDiv}
        <img src="${product.images[0]}" alt="${product.name}">
      </div>
      <div class="product-info">
        <h3>${product.name}</h3>
        <div class="product-price">$${product.price.toFixed(2)} ${discountHTML}</div>
        <a href="product-detail.html?id=${product.id}" class="btn">View Details</a>
      </div>
    `;
    
    productGrid.appendChild(productCard);
  });
  
  // Update product count
  const productsCount = document.querySelector('.products-count');
  if (productsCount) {
    productsCount.textContent = `Showing ${filteredProducts.length} of ${products.length} products`;
  }
}

// Function to initialize the page
function initPage() {
  // Load cart from localStorage
  loadCart();
  
  // Check if we're on the product detail page
  if (window.location.pathname.includes('product-detail')) {
    loadProductDetails();
  }
  
  // Check if we're on the products page
  if (window.location.pathname.includes('products')) {
    loadProducts();
  }
  
  // Set up cart toggle
  const cartToggle = document.getElementById('cart-toggle');
  const cartClose = document.getElementById('cart-close');
  
  if (cartToggle) {
    cartToggle.addEventListener('click', toggleCart);
  }
  
  if (cartClose) {
    cartClose.addEventListener('click', toggleCart);
  }
  
  // Set up checkout button
  const checkoutBtn = document.getElementById('checkout-btn');
  
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      window.location.href = 'checkout.html';
    });
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initPage);
