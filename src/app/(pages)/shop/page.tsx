import { Flower } from "@custom-types/types";
import FlowerCard from '@components/FlowerCard/FlowerCard';
import styles from './ShopPage.module.css';

const flowers: Flower[] = [
  {
    id: 1,
    name: 'Rose Bouquet',
    price: 29.99,
    image: '/images/FlowerBoquet.webp',
    description: 'Classic red roses arranged beautifully for any romantic occasion.',
    category: 'bouquets',
    colors: ['red'],
    season: 'year-round'
  },
  {
    id: 2,
    name: 'Sunflower Basket',
    price: 34.99,
    image: '/images/SunflowerBasket.webp',
    description: 'Bright and cheerful sunflowers to light up any room.',
    category: 'bouquets',
    colors: ['yellow'],
    season: 'summer'
  },
  {
    id: 3,
    name: 'Orchid Plant',
    price: 39.99,
    image: '/images/Orchid.webp',
    description: 'Elegant orchid plant that blooms for months.',
    category: 'plants',
    colors: ['white', 'pink', 'purple'],
    season: 'year-round'
  },
  {
    id: 4,
    name: 'Lavender Field',
    price: 27.99,
    image: '/images/Lavendar.webp',
    description: 'Fragrant lavender stems perfect for relaxation.',
    category: 'bouquets',
    colors: ['purple'],
    season: 'summer'
  },
  {
    id: 5,
    name: 'Tulip Mix',
    price: 32.99,
    image: '/images/Tulip.jpg',
    description: 'Vibrant mix of colorful tulips for a spring touch.',
    category: 'bouquets',
    colors: ['red', 'yellow', 'pink', 'purple'],
    season: 'spring'
  },
  {
    id: 6,
    name: 'Succulent Garden',
    price: 45.99,
    image: '/images/SucculentGarden.avif',
    description: 'Low-maintenance succulent arrangement in a ceramic pot.',
    category: 'plants',
    colors: ['green'],
    season: 'year-round'
  },
  {
    id: 7,
    name: 'Peony Bouquet',
    price: 49.99,
    image: '/images/PeonyBouqet.webp',
    description: 'Lush peonies in full bloom, perfect for special occasions.',
    category: 'bouquets',
    colors: ['pink', 'white'],
    season: 'spring'
  },
  {
    id: 8,
    name: 'Bonsai Tree',
    price: 59.99,
    image: '/images/BonsaiTree.webp',
    description: 'Miniature Japanese maple bonsai tree for your home or office.',
    category: 'plants',
    colors: ['green', 'red'],
    season: 'year-round'
  }
];

const ShopPage = () => {
  return (
    <div className={styles["shop-page"]}>
      <div className="container">
        <h1 className={styles["page-title"]}>Our Flower Shop</h1>
        <p className={styles["page-subtitle"]}>Browse our beautiful selection of flowers and plants</p>
        
        <div className={styles["filters"]}>
          <div className={styles["filter-group"]}>
            <label htmlFor="category">Category:</label>
            <select id="category" className={styles['filter-select']}>
              <option value="all">All Categories</option>
              <option value="bouquets">Bouquets</option>
              <option value="plants">Plants</option>
              <option value="special">Special Occasions</option>
            </select>
          </div>
          
          <div className={styles["filter-group"]}>
            <label htmlFor="season">Season:</label>
            <select id="season" className={styles['filter-select']}>
              <option value="all">All Seasons</option>
              <option value="spring">Spring</option>
              <option value="summer">Summer</option>
              <option value="fall">Fall</option>
              <option value="winter">Winter</option>
              <option value="year-round">Year-Round</option>
            </select>
          </div>
          
          <div className={styles["filter-group"]}>
            <label htmlFor="color">Color:</label>
            <select id="color" className={styles['filter-select']}>
              <option value="all">All Colors</option>
              <option value="red">Red</option>
              <option value="pink">Pink</option>
              <option value="yellow">Yellow</option>
              <option value="purple">Purple</option>
              <option value="white">White</option>
              <option value="green">Green</option>
            </select>
          </div>
        </div>
        
        <div className={styles["flowers-grid"]}>
          {flowers.map(flower => (
            <FlowerCard key={flower.id} {...flower} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;