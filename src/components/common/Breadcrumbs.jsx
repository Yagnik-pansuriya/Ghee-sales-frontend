import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiChevronRight, FiHome } from 'react-icons/fi';

const Breadcrumbs = ({ customLinks = [] }) => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    return (
        <nav className="flex mb-8 overflow-x-auto no-scrollbar py-2" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm font-medium whitespace-nowrap">
                <li>
                    <Link to="/" className="text-text-muted hover:text-secondary transition-colors flex items-center gap-1">
                        <FiHome className="mb-0.5" />
                        <span>Home</span>
                    </Link>
                </li>

                {pathnames.map((value, index) => {
                    const last = index === pathnames.length - 1;
                    const to = `/${pathnames.slice(0, index + 1).join('/')}`;

                    // Simple capitalization if not custom
                    const displayName = value.charAt(0).toUpperCase() + value.slice(1).replace(/-/g, ' ');

                    return (
                        <li key={to} className="flex items-center space-x-2">
                            <FiChevronRight className="text-text-muted/30" />
                            {last ? (
                                <span className="text-primary font-bold">{displayName}</span>
                            ) : (
                                <Link to={to} className="text-text-muted hover:text-secondary transition-colors">
                                    {displayName}
                                </Link>
                            )}
                        </li>
                    );
                })}

                {customLinks.map((link, index) => (
                    <li key={index} className="flex items-center space-x-2">
                        <FiChevronRight className="text-text-muted/30" />
                        <span className="text-primary font-bold">{link.name}</span>
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;
