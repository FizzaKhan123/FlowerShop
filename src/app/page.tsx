import HeroSection from '@components/HeroSection/HeroSection';
import FlowerCard from '@components/FlowerCard/FlowerCard';
import { Flower } from "@custom-types/types";
import Link from 'next/link';
import Image from "next/image"; 

const featuredFlowers: Flower[] = [
  {
    id: 1,
    name: 'Rose Bouquet',
    price: 29.99,
    image: '/images/FlowerBoquet.webp',
    description: 'Classic red roses arranged beautifully for any romantic occasion.',
    category: 'bouquets'
  },
  {
    id: 2,
    name: 'Sunflower Basket',
    price: 34.99,
    image: '/images/SunflowerBasket.webp',
    description: 'Bright and cheerful sunflowers to light up any room.',
    category: 'bouquets'
  },
  {
    id: 3,
    name: 'Orchid Plant',
    price: 39.99,
    image: '/images/Orchid.webp',
    description: 'Elegant orchid plant that blooms for months.',
    category: 'plants'
  },
  {
    id: 4,
    name: 'Lavender Field',
    price: 27.99,
    image: '/images/Lavendar.webp',
    description: 'Fragrant lavender stems perfect for relaxation.',
    category: 'bouquets'
  }
];

const Home = () => {
  return (
    <div>
      <HeroSection 
        title="Beautiful Flowers for Every Occasion"
        subtitle="Handcrafted arrangements with fresh, premium blooms"
        backgroundImage="/images/HomeBg.jpeg"
      />

      <section className="section">
        <div className="container">
          <h2 className="section-title">Featured Flowers</h2>
          <p className="section-subtitle">Our most popular arrangements</p>
          
          <div className="flowers-grid">
            {featuredFlowers.map(flower => (
              <FlowerCard key={flower.id} {...flower} />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-secondary">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="section-title">About Our Flowers</h2>
              <p className="mb-4">
                We source our flowers from local growers who practice sustainable farming. 
                Each stem is carefully selected for freshness and quality.
              </p>
              <p className="mb-6">
                Our florists have over 20 years of experience creating stunning arrangements 
                for weddings, events, and everyday occasions.
              </p>
              <Link href="/about" className="btn-primary">
                Learn More
              </Link>
            </div>
            <div className="md:w-1/2">
              <Image 
                src="/images/Flourist.webp" 
                alt="Florist at work"
                width={600}
                height={400}
                className="Flourist rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;