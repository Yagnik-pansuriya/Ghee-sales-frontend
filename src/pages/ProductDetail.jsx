import { getProductById } from '../data/products';
import { useParams, Link } from 'react-router-dom';

const ProductDetail = () => {
    const { id } = useParams();
    const product = getProductById(id);

    if (!product) {
        return (
            <div className="pt-32 text-center h-screen">
                <h2 className="text-2xl font-bold">Product not found</h2>
                <Button as={Link} to="/products" className="mt-4">Back to Shop</Button>
            </div>
        );
    }

    return (
        <div className="pt-32 min-h-screen bg-white">
            <SectionWrapper>
                <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Image Gallery */}
                    <div className="bg-cream rounded-[40px] p-10 aspect-square flex items-center justify-center relative overflow-hidden group">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700"
                        />
                    </div>

                    {/* Details */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <span className="bg-secondary/10 text-secondary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Premium</span>
                            <div className="flex items-center gap-1 text-secondary text-sm font-bold">
                                <FiStar className="fill-current" /> {product.rating} ({product.reviews} reviews)
                            </div>
                        </div>

                        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-primary">{product.name}</h1>
                        <p className="text-3xl text-primary font-bold mb-8">₹{product.price} <span className="text-lg text-text-muted font-normal">/ {product.size || '500ml'}</span></p>

                        <p className="text-text-muted text-lg mb-8 leading-relaxed">
                            {product.description}
                        </p>

                        <div className="mb-10 p-6 bg-cream rounded-2xl border border-secondary/20">
                            <h4 className="font-bold mb-4 font-serif text-primary">Key Benefits:</h4>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {product.benefits.map((benefit, idx) => (
                                    <li key={idx} className="flex items-center gap-2 text-sm text-text-muted">
                                        <span className="text-secondary"><FiCheck /></span> {benefit}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex items-center border border-border rounded-full px-4 gap-4">
                                <button className="text-xl font-bold text-primary p-2">-</button>
                                <span className="font-bold text-lg">1</span>
                                <button className="text-xl font-bold text-primary p-2">+</button>
                            </div>
                            <Button variant="primary" size="lg" className="flex-1 gap-2 shadow-lg hover:shadow-xl">
                                Add to Cart <FiShoppingBag />
                            </Button>
                        </div>
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
};

export default ProductDetail;
