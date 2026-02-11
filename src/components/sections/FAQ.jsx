import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMinus, FiHelpCircle } from 'react-icons/fi';
import SectionWrapper from '../layout/SectionWrapper';

const faqs = [
    {
        question: "What makes Bilona Ghee different from commercial ghee?",
        answer: "Unlike industrial ghee made from cream and heat-treatments, Bilona Ghee is made by boiling A2 milk, setting it into curd, and churning it with a wooden masher. This preserves the medicinal properties and granular texture of the ghee."
    },
    {
        question: "Is your honey truly raw and unprocessed?",
        answer: "Yes, our honey is collected directly from beehives and only undergoes a simple mesh filtration to remove debris. We never heat or pasteurize it, ensuring all bioactive enzymes and nutritional benefits remain intact."
    },
    {
        question: "Why does my honey crystallize?",
        answer: "Crystallization is a hallmark of natural, raw honey. It happens because raw honey contains natural pollens and enzymes. If it crystallizes, simply place the jar in warm water to restore its liquid state."
    },
    {
        question: "Do you use any preservatives or artificial additives?",
        answer: "Absolutely not. Farm Begin stands for 100% purity. Our products are free from chemical preservatives, artificial colors, and synthetic flavors. We offer nature in its purest form."
    },
    {
        question: "Is your A2 Ghee made from grass-fed cows?",
        answer: "Yes, we source milk from cows that graze on organic pastures. Their diverse diet of natural grasses and herbs is what gives our A2 Ghee its unique nutrient profile and rich aroma."
    }
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="border-b border-primary/10 last:border-none">
            <button
                onClick={onClick}
                className="w-full py-6 flex items-center justify-between text-left hover:text-secondary transition-colors group"
            >
                <span className="text-lg md:text-xl font-serif font-bold text-primary group-hover:text-secondary transition-colors">
                    {question}
                </span>
                <span className={`p-2 rounded-full ${isOpen ? 'bg-secondary text-white' : 'bg-cream text-primary'} transition-all`}>
                    {isOpen ? <FiMinus /> : <FiPlus />}
                </span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="pb-8 text-text-muted leading-relaxed text-lg">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <SectionWrapper id="faq" bgColor="bg-white">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 text-secondary font-bold uppercase tracking-widest text-sm mb-4">
                        <FiHelpCircle />
                        <span>Common Doubts</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Transparency Matters</h2>
                    <p className="text-text-muted text-lg">
                        We believe in complete honesty. Here are the answers to everything you need to know about our sourcing and methods.
                    </p>
                </div>

                <div className="bg-cream/30 p-8 md:p-12 rounded-[40px] border border-primary/5">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                        />
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default FAQ;
