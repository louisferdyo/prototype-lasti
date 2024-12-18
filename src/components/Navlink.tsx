import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export const NavLink = ({ href, children }: NavLinkProps) => {
  return (
    <a
      href={href}
      className="text-white hover:text-emerald-600 font-medium transition-colors duration-200"
    >
      {children}
    </a>
  );
};