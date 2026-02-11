export const products = [
    {
        id: 1,
        name: "A2 Gir Cow Ghee",
        price: "1,499",
        category: "Ghee",
        image: "https://satvikghee.com/cdn/shop/files/Pure_Satvik_A2_Gir_Cow_Ghee.jpg?v=1770036068",
        tag: "Bestseller",
        desc: "Traditional Bilona method hand-churned from A2 curd of grass-fed Gir cows.",
        benefits: ["Rich in Omega-3", "High Smoke Point", "Easy Digestion"]
    },
    {
        id: 2,
        name: "Raw Forest Honey",
        price: "850",
        category: "Honey",
        image: "https://foodcare.in/cdn/shop/files/wild_forest_honey.jpg?v=1739178912&width=713",
        tag: "Pure",
        desc: "Unprocessed, multi-floral honey collected from deep forest hives.",
        benefits: ["Natural Immunity", "Rich in Antioxidants", "No Added Sugar"]
    },
    {
        id: 3,
        name: "Spiced Turmeric Ghee",
        price: "950",
        category: "Ghee",
        image: "https://arhamlife.com/cdn/shop/files/antimastghee7.jpg?v=1766557004&width=1946",
        tag: "Immunity",
        desc: "A2 Ghee infused with organic Lakadong turmeric and black pepper.",
        benefits: ["Anti-inflammatory", "Golden Milk Alternative", "Wellness Boost"]
    },
    {
        id: 4,
        name: "Wildflower Honey",
        price: "650",
        category: "Honey",
        image: "https://pahadiamrut.com/cdn/shop/files/PRODUCTMAINIMAGE_GENERATEDBYULABS_6bcda5b2-9786-4c0b-a909-b9ad892ede8e.png?v=1753276424",
        tag: "Natural",
        desc: "Light and floral honey from high-altitude wildflower meadows.",
        benefits: ["Great for Baking", "Natural Sweetener", "Locally Sourced"]
    },
    {
        id: 5,
        name: "Buffalo Ghee",
        price: "1,100",
        category: "Ghee",
        image: "https://shahjighee.com/wp-content/uploads/2024/10/Buffalo-ghee-Main2-min.jpg",
        tag: "Classic",
        desc: "Traditional white ghee from pure buffalo milk, great for cooking.",
        benefits: ["Rich Texture", "Traditional Aroma", "Energy Source"]
    },
    {
        id: 6,
        name: "Mustard Honey",
        price: "550",
        category: "Honey",
        image: "https://honeyandspice.in/cdn/shop/files/2_2bf1082e-edff-4435-8192-6b74b53f3e95.jpg?v=1765192948&width=480",
        tag: "Creamy",
        desc: "Unique, naturally creamy honey from the yellow mustard fields.",
        benefits: ["Creamy Texture", "Distinct Flavor", "100% Raw"]
    }
];

export const getFeaturedProducts = () => products.slice(0, 3);
export const getProductsByCategory = (category) => products.filter(p => p.category === category);
export const getProductById = (id) => products.find(p => p.id === parseInt(id));
