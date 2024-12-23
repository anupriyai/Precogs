// components/Navbar.js
"use client";  // Ensures this component runs on the client side

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 px-4 py-3 ${isScrolled ? 'bg-cyan-900 backdrop-blur-md' : 'bg-transparent'}`}>
      <nav className="container mx-auto flex justify-between items-center text-white">
        <Link href="/" className="text-3xl font-bold">Precogs</Link>
        <ul className="flex space-x-8 text-lg">
          <li><Link href="/features" className="hover:text-cyan-200">Features</Link></li>
          <li><Link href="/pricing" className="hover:text-cyan-200">Pricing</Link></li>
          <li><Link href="/faq" className="hover:text-cyan-200">FAQ</Link></li>
          <li><Link href="/login" className="hover:text-cyan-200">Login</Link></li>
          <li><Link href="/signup" className="bg-cyan-500 hover:bg-cyan-400 text-white py-2 px-4 rounded-md">Sign Up</Link></li>
        </ul>
      </nav>
    </header>
  );
}
