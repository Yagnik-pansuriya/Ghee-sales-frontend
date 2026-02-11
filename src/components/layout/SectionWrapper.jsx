import React from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

const SectionWrapper = React.forwardRef(({
    children,
    className,
    id,
    bgColor = 'bg-cream',
}, ref) => {
    return (
        <section
            ref={ref}
            id={id}
            className={twMerge(clsx("py-20 md:py-32 px-4 md:px-8 relative overflow-hidden", bgColor, className))}
        >
            <div className="max-w-7xl mx-auto w-full relative z-10">
                {children}
            </div>
        </section>
    );
});

SectionWrapper.displayName = 'SectionWrapper';

export default SectionWrapper;
