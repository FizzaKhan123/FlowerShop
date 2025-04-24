"use client";
import Link from 'next/link';
import { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span className={styles.flowerIcon}>🌸</span>
          <span>Petal Paradise</span>
        </Link>

        <div className={`${styles.links} ${isOpen ? styles.active : ''}`}>
          <Link href="/" className={styles.link}>Home</Link>
          <Link href="/about" className={styles.link}>About</Link>
          <Link href="/shop" className={styles.link}>Shop</Link>
          <Link href="/gallery" className={styles.link}>Gallery</Link>
          <Link href="/contact" className={styles.link}>Contact</Link>
        </div>

        <div className={styles.cartIcon}>
          <span className={styles.cartCount}>0</span>
          🛒
        </div>

        <button 
          className={`${styles.hamburger} ${isOpen ? styles.active : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;