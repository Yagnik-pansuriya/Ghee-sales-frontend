export const articles = [
    {
        id: 1,
        slug: 'benefits-of-bilona-ghee',
        title: "The Golden Elixir: Why Bilona Ghee is Liquid Gold",
        subtitle: "Discover the ancient science behind the traditional churning method and its profound health benefits.",
        category: "Rituals",
        author: {
            name: "Dr. Aditi Sharma",
            role: "Ayurvedic Practitioner",
            image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=200&auto=format&fit=crop"
        },
        readTime: "5 min read",
        publishedAt: "Oct 12, 2023",
        image: "https://images.unsplash.com/photo-1615485500624-9548ae4f1f51?q=80&w=1200&auto=format&fit=crop",
        tags: ["Ayurveda", "Nutrition", "Gut Health"],
        content: `
            <p>In the fast-paced world of modern nutrition, few superfoods have stood the test of time like <strong>Desi Cow Bilona Ghee</strong>. Referred to in the Vedas as the "first and most essential food," ghee is not just a cooking fat but a medicinal powerhouse.</p>
            
            <h3>The Science of Bilona</h3>
            <p>Unlike commercial ghee made from cream, Bilona ghee starts with curd. Whole A2 milk is boiled, cooled, and cultured into curd. This curd is then hand-churned using a wooden Bilona (churner) to separate the makkhan (butter). This bi-directional churning mimics the motion of the solar system, believed to infuse the ghee with cosmic energy.</p>

            <block>
                "Ghee is the intelligence of the digestive fire." – Charaka Samhita
            </block>

            <h3>Key Benefits</h3>
            <ul>
                <li><strong>High Smoke Point:</strong> At 250°C, it's safer for cooking than olive oil or butter.</li>
                <li><strong>Gut Healing:</strong> Rich in Butyric Acid, which nourishes the colon lining.</li>
                <li><strong>Lactose Free:</strong> The culturing process breaks down lactose, making it suitable for dairy-sensitive individuals.</li>
            </ul>

            <p>Integrating a teaspoon of warm ghee into your morning routine can lubricate joints, improve memory (Medhya Rasayana), and give you a glowing complexion.</p>
        `
    },
    {
        id: 2,
        slug: 'monsoon-immunity-boosters',
        title: "Monsoon Wellness: Ayurvedic Immunity Boosters",
        subtitle: "Prepare your body for the rainy season with these simple kitchen remedies.",
        category: "Wellness",
        author: {
            name: "Rajiv Malhotra",
            role: "Wellness Coach",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
        },
        readTime: "4 min read",
        publishedAt: "Sep 05, 2023",
        image: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?q=80&w=1200&auto=format&fit=crop",
        tags: ["Immunity", "Seasonal", "Herbs"],
        content: `
            <p>The transition from summer to monsoon brings relief but also vulnerability to infections. Ayurveda suggests "Ritucharya" (seasonal routine) to maintain balance.</p>

            <h3>Turmeric Milk (Haldi Doodh)</h3>
            <p>The classic golden milk is your best friend. Add a pinch of black pepper to aid curcumin absorption. Use A2 milk and a dollop of ghee for best results.</p>

            <h3>Honey & Ginger</h3>
            <p>Raw honey is "Yogavahi" – a bio-enhancer that carries medicinal properties deep into tissues. Mix fresh ginger juice with raw honey to combat congestion.</p>
        `
    },
    {
        id: 3,
        slug: 'sattvic-cooking-basics',
        title: "Sattvic Cooking: Food for the Soul",
        subtitle: "How to prepare meals that bring clarity, peace, and energy.",
        category: "Recipes",
        author: {
            name: "Chef Anjali",
            role: "Sattvic Chef",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
        },
        readTime: "6 min read",
        publishedAt: "Aug 20, 2023",
        image: "https://images.unsplash.com/photo-1505253758473-96b701d2cd03?q=80&w=1200&auto=format&fit=crop",
        tags: ["Cooking", "Spiritual", "Vegetarian"],
        content: `
            <p>Sattvic food is pure, essential, natural, vital, energy-containing, clean, conscious, true, honest, and wise. It puts you in touch with the Divine.</p>

            <h3>Principles of Sattvic Diet</h3>
            <p>It emphasizes seasonal foods, fruits, dairy products, nuts, seeds, oils, ripe vegetables, legumes, and non-meat based proteins.</p>
        `
    },
    {
        id: 4,
        slug: 'traceability-matters',
        title: "Why Knowing Your Farmer Matters",
        subtitle: "The journey from soil to soul is shorter than you think.",
        category: "Sustainability",
        author: {
            name: "Vikram Singh",
            role: "Farm Manager",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
        },
        readTime: "3 min read",
        publishedAt: "July 15, 2023",
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop",
        tags: ["Farming", "Ethics", "Community"],
        content: `
            <p>In an era of industrial agriculture, the connection between consumer and farmer has been severed. Rebuilding this bond is crucial for health and planetary well-being.</p>
        `
    }
];

export const getRelatedArticles = (currentId) => {
    return articles.filter(article => article.id !== currentId).slice(0, 2);
};
