export const products = [
    {
        id: 1,
        name: "A2 Gir Cow Ghee",
        price: "1,499",
        category: "Ghee",
        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=800&auto=format&fit=crop",
        tag: "Bestseller",
        desc: "Traditional Bilona method hand-churned from A2 curd of grass-fed Gir cows.",
        benefits: ["Rich in Omega-3", "High Smoke Point", "Easy Digestion"]
    },
    {
        id: 2,
        name: "Raw Forest Honey",
        price: "850",
        category: "Honey",
        image: "https://images.unsplash.com/photo-1587334274328-64186a80aeee?q=80&w=800&auto=format&fit=crop",
        tag: "Pure",
        desc: "Unprocessed, multi-floral honey collected from deep forest hives.",
        benefits: ["Natural Immunity", "Rich in Antioxidants", "No Added Sugar"]
    },
    {
        id: 3,
        name: "Spiced Turmeric Ghee",
        price: "950",
        category: "Ghee",
        image: "https://images.unsplash.com/photo-1615485290382-441e4d0c9cb5?q=80&w=800&auto=format&fit=crop",
        tag: "Immunity",
        desc: "A2 Ghee infused with organic Lakadong turmeric and black pepper.",
        benefits: ["Anti-inflammatory", "Golden Milk Alternative", "Wellness Boost"]
    },
    {
        id: 4,
        name: "Wildflower Honey",
        price: "650",
        category: "Honey",
        image: "https://images.unsplash.com/photo-1471943311424-646960669fba?q=80&w=800&auto=format&fit=crop",
        tag: "Natural",
        desc: "Light and floral honey from high-altitude wildflower meadows.",
        benefits: ["Great for Baking", "Natural Sweetener", "Locally Sourced"]
    },
    {
        id: 5,
        name: "Buffalo Ghee",
        price: "1,100",
        category: "Ghee",
        image: "https://images.unsplash.com/photo-1541696490-8744a5db7fbb?q=80&w=800&auto=format&fit=crop",
        tag: "Classic",
        desc: "Traditional white ghee from pure buffalo milk, great for cooking.",
        benefits: ["Rich Texture", "Traditional Aroma", "Energy Source"]
    },
    {
        id: 6,
        name: "Mustard Honey",
        price: "550",
        category: "Honey",
        image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?q=80&w=800&auto=format&fit=crop",
        tag: "Creamy",
        desc: "Unique, naturally creamy honey from the yellow mustard fields.",
        benefits: ["Creamy Texture", "Distinct Flavor", "100% Raw"]
    }
];

export const getFeaturedProducts = () => products.slice(0, 3);
export const getProductsByCategory = (category) => products.filter(p => p.category === category);
export const getProductById = (id) => products.find(p => p.id === parseInt(id));
