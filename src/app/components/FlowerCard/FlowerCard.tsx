import Image from 'next/image';
import Link from 'next/link';
import styles from './FlowerCard.module.css';
import { Flower } from "@custom-types/types";

const FlowerCard = ({ id, name, price, image, description, category }: Flower) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={image}
          alt={name}
          fill
          className={styles.image}
        />
        <span className={styles.categoryTag}>{category}</span>
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.title}>{name}</h3>
        <p className={styles.description}>{description}</p>
        
        <div className={styles.footer}>
          <span className={styles.price}>${price.toFixed(2)}</span>
          <div className={styles.actions}>
            <button className={styles.wishlistButton}>
              ♡
            </button>
            <Link href={`/shop/${id}`} className={styles.viewButton}>
              View
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowerCard;