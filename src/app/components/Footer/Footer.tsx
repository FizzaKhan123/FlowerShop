import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>Petal Paradise</h3>
          <p className={styles.footerText}>
            Bringing nature's beauty to your doorstep with our exquisite floral arrangements.
          </p>
        </div>

        <div className={styles.footerSection}>
          <h4 className={styles.sectionTitle}>Quick Links</h4>
          <ul className={styles.footerLinks}>
            <li><Link href="/" className={styles.footerLink}>Home</Link></li>
            <li><Link href="/about" className={styles.footerLink}>About Us</Link></li>
            <li><Link href="/shop" className={styles.footerLink}>Shop</Link></li>
            <li><Link href="/gallery" className={styles.footerLink}>Gallery</Link></li>
            <li><Link href="/contact" className={styles.footerLink}>Contact</Link></li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h4 className={styles.sectionTitle}>Contact Us</h4>
          <address className={styles.contactInfo}>
            <p>123 Flower Street</p>
            <p>Garden City, GC 12345</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@petalparadise.com</p>
          </address>
        </div>

        <div className={styles.footerSection}>
          <h4 className={styles.sectionTitle}>Follow Us</h4>
          <div className={styles.socialLinks}>
            <Link href="#" className={styles.socialLink}>Facebook</Link>
            <Link href="#" className={styles.socialLink}>Instagram</Link>
            <Link href="#" className={styles.socialLink}>Twitter</Link>
            <Link href="#" className={styles.socialLink}>Pinterest</Link>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        <p>&copy; {new Date().getFullYear()} Petal Paradise. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;