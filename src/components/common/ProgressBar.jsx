import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const ProgressBar = ({ current, total, label, successMsg, className }) => {
    const percentage = Math.min((current / total) * 100, 100);
    const isSuccess = current >= total;

    return (
        <div className={clsx("w-full space-y-2", className)}>
            <div className="flex justify-between items-end text-sm">
                <span className={clsx("font-bold transition-colors", isSuccess ? "text-secondary" : "text-primary")}>
                    {isSuccess ? successMsg : label}
                </span>
                {!isSuccess && (
                    <span className="text-text-muted font-medium">
                        ₹{(total - current).toLocaleString('en-IN')} away
                    </span>
                )}
            </div>
            <div className="h-2 w-full bg-cream rounded-full overflow-hidden border border-primary/5">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className={clsx(
                        "h-full rounded-full transition-colors duration-500",
                        isSuccess ? "bg-secondary shadow-[0_0_10px_rgba(212,175,55,0.4)]" : "bg-primary"
                    )}
                />
            </div>
        </div>
    );
};

export default ProgressBar;
