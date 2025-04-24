import Image from 'next/image';
import styles from './HeroSection.module.css';
import Link from 'next/link';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  ctaText?: string;
  ctaLink?: string;
}

const HeroSection = ({ 
  title, 
  subtitle, 
  backgroundImage,
  ctaText = "Shop Now",
  ctaLink = "/shop"
}: HeroSectionProps) => {
  return (
    <section className={styles.hero}>
      <div className={styles.backgroundImage}>
        <Image
          src={backgroundImage}
          alt="Flower background"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className={styles.overlay}></div>
      </div>
      
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
        <Link href={ctaLink} className={styles.ctaButton}>
          {ctaText}
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;