import React from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

const SectionWrapper = ({
    children,
    className,
    id,
    bgColor = 'bg-cream',
}) => {
    return (
        <section
            id={id}
            className={twMerge(clsx("py-20 md:py-32 px-4 md:px-8 relative overflow-hidden", bgColor, className))}
        >
            <div className="max-w-7xl mx-auto w-full relative z-10">
                {children}
            </div>
        </section>
    );
};

export default SectionWrapper;
