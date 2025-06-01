// Updated product data with dog products
const products = {
    // Human products
    '1': {
        name: 'Blowjob Is Better Than No Job - T-Shirt',
        price: '$24.99',
        originalPrice: '$34.99',
        discount: '-28%',
        description: 'Make a bold statement with our edgy "Blowjob Is Better Than No Job" t-shirt. This premium quality shirt features a comfortable fit, durable fabric, and our signature provocative design that\'s guaranteed to turn heads.',
        longDescription: 'Make a bold statement with our edgy "Blowjob Is Better Than No Job" t-shirt. This premium quality shirt features a comfortable fit, durable fabric, and our signature provocative design that\'s guaranteed to turn heads.\n\nPerfect for those who appreciate dark humor and aren\'t afraid to show it. Each shirt is screen printed with high-quality inks that won\'t fade or crack after washing.\n\nOur shirts are designed to be conversation starters - wear them to parties, casual outings, or anywhere you want to make a statement and get a laugh.',
        details: [
            '100% premium cotton',
            'Pre-shrunk fabric',
            'Screen printed design',
            'Ribbed collar',
            'Double-stitched sleeves and hem',
            'Machine washable (cold, inside out)',
            'Tumble dry low',
            'Designed and printed in the USA'
        ],
        images: [
            'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
            'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
            'https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
            'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
        ],
        category: 'tshirts',
        forDogs: false
    },
    '2': {
        name: 'Wish You Were A Beer - Gym Tank',
        price: '$29.99',
        originalPrice: '',
        discount: '',
        description: 'Hit the gym in style with our "Wish You Were A Beer" tank top. Perfect for those who love fitness but also appreciate a good brew. This comfortable, breathable tank features our popular design that\'s sure to get a laugh at the gym.',
        longDescription: 'Hit the gym in style with our "Wish You Were A Beer" tank top. Perfect for those who love fitness but also appreciate a good brew. This comfortable, breathable tank features our popular design that\'s sure to get a laugh at the gym.\n\nMade from lightweight, moisture-wicking fabric, this tank is designed to keep you cool during your workout while still looking stylish. The bold print won\'t fade or crack, even after multiple washes.',
        details: [
            '90% polyester, 10% elastane',
            'Moisture-wicking fabric',
            'Lightweight and breathable',
            'Screen printed design',
            'Racerback style',
            'Machine washable',
            'Designed for comfort during workouts',
            'Made in the USA'
        ],
        images: [
            'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
            'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
            'https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
            'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
        ],
        category: 'tanks',
        forDogs: false
    },
    '3': {
        name: 'Googled My Symptoms - Oversize Shirt',
        price: '$34.99',
        originalPrice: '$44.99',
        discount: '-22%',
        description: 'For those who know the dangers of WebMD, our "Googled My Symptoms" oversized shirt is the perfect fit. This roomy, comfortable shirt features our popular design that resonates with anyone who\'s ever fallen down the internet diagnosis rabbit hole.',
        longDescription: 'For those who know the dangers of WebMD, our "Googled My Symptoms" oversized shirt is the perfect fit. This roomy, comfortable shirt features our popular design that resonates with anyone who\'s ever fallen down the internet diagnosis rabbit hole.\n\nThe oversized fit gives you that trendy, relaxed look that\'s perfect for casual outings or lounging at home. Made from high-quality cotton, this shirt is both durable and soft against your skin.',
        details: [
            '100% premium cotton',
            'Oversized fit',
            'Drop shoulders',
            'Screen printed design',
            'Reinforced seams',
            'Machine washable (cold, inside out)',
            'Tumble dry low',
            'Designed and printed in the USA'
        ],
        images: [
            'https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
            'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
            'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
            'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
        ],
        category: 'oversized',
        forDogs: false
    },
    '4': {
        name: 'Dark Humor Hoodie',
        price: '$49.99',
        originalPrice: '',
        discount: '',
        description: 'Stay warm and edgy with our Dark Humor Hoodie. This premium quality hoodie features a comfortable fit, soft inner lining, and our signature dark humor design that\'s perfect for those with a twisted sense of humor.',
        longDescription: 'Stay warm and edgy with our Dark Humor Hoodie. This premium quality hoodie features a comfortable fit, soft inner lining, and our signature dark humor design that\'s perfect for those with a twisted sense of humor.\n\nThe hoodie is made from a durable cotton-polyester blend that retains its shape and color even after multiple washes. The front pouch pocket provides convenient storage, while the adjustable drawstring hood ensures a perfect fit.',
        details: [
            '80% cotton, 20% polyester',
            'Soft inner lining',
            'Front pouch pocket',
            'Adjustable drawstring hood',
            'Ribbed cuffs and hem',
            'Screen printed design',
            'Machine washable (cold, inside out)',
            'Designed and printed in the USA'
        ],
        images: [
            'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
            'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
            'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
            'https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
        ],
        category: 'hoodies',
        forDogs: false
    },
    
    // Dog products
    'd1': {
        name: 'Bad to the Bone Hoodie',
        price: '$24.99',
        originalPrice: '$34.99',
        discount: '-28%',
        description: 'Your furry friend will be the coolest pup at the dog park with our "Bad to the Bone" hoodie. This stylish and comfortable dog hoodie features our popular design that\'s sure to get compliments from other pet parents.',
        longDescription: 'Your furry friend will be the coolest pup at the dog park with our "Bad to the Bone" hoodie. This stylish and comfortable dog hoodie features our popular design that\'s sure to get compliments from other pet parents.\n\nMade from soft, stretchy fabric that won\'t restrict your dog\'s movement, this hoodie is perfect for cooler days or just making a fashion statement. The easy-to-use leash hole allows for convenient walks without removing the hoodie.',
        details: [
            'Soft cotton-blend fabric',
            'Stretchy for comfort and easy movement',
            'Leash hole at neck',
            'Machine washable (gentle cycle)',
            'Available in sizes XS-XL',
            'Screen printed design',
            'Easy to put on and take off',
            'Made in the USA'
        ],
        images: [
            'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
            'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
            'https://images.unsplash.com/photo-1583337426008-2fef51aa2c15?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
            'https://images.unsplash.com/photo-1583336663277-620dc1996580?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
        ],
        category: 'dog-hoodies',
        forDogs: true
    },
    'd2': {
        name: 'Bark Side of the Moon Tee',
        price: '$19.99',
        originalPrice: '',
        discount: '',
        description: 'Let your dog show off their musical taste with our "Bark Side of the Moon" t-shirt. This comfortable dog tee is perfect for pups who rock to their own beat and want to make a statement at the dog park.',
        longDescription: 'Let your dog show off their musical taste with our "Bark Side of the Moon" t-shirt. This comfortable dog tee is perfect for pups who rock to their own beat and want to make a statement at the dog park.\n\nMade from lightweight, breathable cotton that\'s gentle on your dog\'s skin and fur. The shirt is easy to put on and take off with a simple design that won\'t cause discomfort or restrict movement.',
        details: [
            '100% lightweight cotton',
            'Breathable fabric',
            'No irritating tags or seams',
            'Machine washable',
            'Available in sizes XS-XL',
            'Screen printed design',
            'Stretchy neck opening',
            'Made in the USA'
        ],
        images: [
            'https://images.unsplash.com/photo-1583337426008-2fef51aa2c15?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
            'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
            'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
            'https://images.unsplash.com/photo-1583336663277-620dc1996580?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
        ],
        category: 'dog-tshirts',
        forDogs: true
    },
    'd3': {
        name: 'Punk Rock Bandana',
        price: '$12.99',
        originalPrice: '$16.99',
        discount: '-23%',
        description: 'Add some attitude to your pup\'s wardrobe with our Punk Rock Bandana. This stylish accessory features edgy designs and is perfect for dogs who like to make a statement without the bulk of a full outfit.',
        longDescription: 'Add some attitude to your pup\'s wardrobe with our Punk Rock Bandana. This stylish accessory features edgy designs and is perfect for dogs who like to make a statement without the bulk of a full outfit.\n\nMade from soft, high-quality fabric that\'s comfortable around your dog\'s neck. The bandana is double-sided, so you get two looks in one, and it\'s easy to tie at the perfect length for your dog\'s size.',
        details: [
            'Soft cotton fabric',
            'Double-sided design',
            'One size fits most (adjustable)',
            'Machine washable',
            'Vibrant colors that won\'t fade',
            'Lightweight and comfortable',
            'Perfect for all seasons',
            'Made in the USA'
        ],
        images: [
            'https://images.unsplash.com/photo-1583336663277-620dc1996580?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
            'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
            'https://images.unsplash.com/photo-1583337426008-2fef51aa2c15?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
            'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
        ],
        category: 'dog-accessories',
        forDogs: true
    },
    'd4': {
        name: 'Biker Dog Leather Jacket',
        price: '$29.99',
        originalPrice: '$39.99',
        discount: '-25%',
        description: 'Transform your pup into the coolest dog on the block with our Biker Dog Leather Jacket. This stylish faux leather jacket gives your dog that edgy, rebellious look while keeping them warm and comfortable.',
        longDescription: 'Transform your pup into the coolest dog on the block with our Biker Dog Leather Jacket. This stylish faux leather jacket gives your dog that edgy, rebellious look while keeping them warm and comfortable.\n\nMade from high-quality faux leather with a soft fleece lining for comfort and warmth. The jacket features decorative studs and patches for that authentic biker look, plus a leash hole for convenient walks.',
        details: [
            'Premium faux leather exterior',
            'Soft fleece lining',
            'Decorative studs and patches',
            'Adjustable velcro closures',
            'Leash hole at neck',
            'Available in sizes XS-XL',
            'Easy to put on and take off',
            'Wipe clean with damp cloth'
        ],
        images: [
            'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
            'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
            'https://images.unsplash.com/photo-1583337426008-2fef51aa2c15?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
            'https://images.unsplash.com/photo-1583336663277-620dc1996580?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
        ],
        category: 'dog-jackets',
        forDogs: true
    }
};

// Function to get product by ID
function getProduct(productId) {
    return products[productId] || products['1']; // Default to product 1 if not found
}

// Function to get all dog products
function getDogProducts() {
    return Object.keys(products)
        .filter(key => products[key].forDogs)
        .map(key => ({
            id: key,
            ...products[key]
        }));
}

// Function to get all human products
function getHumanProducts() {
    return Object.keys(products)
        .filter(key => !products[key].forDogs)
        .map(key => ({
            id: key,
            ...products[key]
        }));
}
