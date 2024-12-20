'use client'
import React from 'react';
import { Utensils } from 'lucide-react';
import { NavLink } from './Navlink';

const navItems = [
  { label: 'Schedule', href: '/' },
  { label: 'Calculator', href: '/calculate' },
  { label: 'Information', href: '/' },
  { label: 'Community', href: '/' },
];

export const Navbar = () => {
  return (
    <nav className="bg-[#85A98F] shadow-sm w-full fixed font-nunito">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href= "/" className="flex items-center space-x-2">
            <Utensils className="h-8 w-8 text-green-300" />
            <span className="text-3xl font-bold text-green-950">
              Food<span className="text-green-300">Fix</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="flex space-x-8">
            {navItems.map((item) => (
              <NavLink key={item.href} href={item.href}>
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};