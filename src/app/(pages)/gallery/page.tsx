import React from 'react';
import styles from './gallery.module.css';
import Head from 'next/head';
import Image from 'next/image';

const Gallery: React.FC = () => {
  const flowerImages = [
    { id: 1, src: '/images/FlowerBoquet.webp', alt: 'Beautiful rose bouquet' },
    { id: 2, src: '/images/Tulip.jpg', alt: 'Colorful tulip arrangement' },
    { id: 3, src: '/images/WeddingFlowers.jpg', alt: 'Elegant wedding flowers' },
    { id: 4, src: '/images/SpringFlower.webp', alt: 'Spring flower basket' },
    { id: 5, src: '/images/Orchid.webp', alt: 'Exotic orchid display' },
    { id: 6, src: '/images/Flourist.webp', alt: 'Romantic red roses' },
  ];

  return (
    <>
      <Head>
        <title>Flower Shop - Gallery</title>
        <meta name="description" content="Browse our beautiful flower arrangements" />
      </Head>
      
      <main className={styles.galleryContainer}>
        <h1 className={styles.galleryTitle}>Our Flower Gallery</h1>
        <p className={styles.gallerySubtitle}>Discover our beautiful arrangements</p>
        
        <div className={styles.imageGrid}>
          {flowerImages.map((image) => (
            <div key={image.id} className={styles.imageCard}>
              <Image  
                src={image.src} 
                alt={image.alt} 
                className={styles.galleryImage}
              />
              <p className={styles.imageCaption}>{image.alt}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Gallery;