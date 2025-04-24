
import Image from 'next/image';
import styles from './AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.aboutPage}>
      <div className={styles.hero}>
        <h1>Our Story</h1>
        <p>Discover the passion behind Petal Paradise</p>
      </div>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2>From Humble Beginnings</h2>
            <p>
              Petal Paradise started as a small flower stand in 2010, founded by 
              Emma Richardson, a third-generation florist. What began as a weekend 
              passion project quickly grew into a beloved local flower shop.
            </p>
            <p>
              Today, we are proud to serve our community with the same dedication 
              to quality and personal service that we started with.
            </p>
          </div>
          <div className={styles.imageWrapper}>
            <Image 
              src="/images/FloweShop.webp" 
              alt="Our flower shop"
              fill
              className={styles.image}
            />
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.darkBg}`}>
        <div className={styles.container}>
          <h2 className={styles.centerTitle}>Our Values</h2>
          
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🌱</div>
              <h3>Sustainability</h3>
              <p>
                We partner with eco-conscious growers and use biodegradable packaging 
                to minimize our environmental impact.
              </p>
            </div>
            
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>💐</div>
              <h3>Quality</h3>
              <p>
                Every stem is hand-selected for freshness and beauty. We never 
                compromise on quality.
              </p>
            </div>
            
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>❤️</div>
              <h3>Community</h3>
              <p>
                We support local businesses and donate flowers to hospitals and 
                nursing homes weekly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.centerTitle}>Meet Our Team</h2>
          
          <div className={styles.teamGrid}>
            <div className={styles.teamMember}>
              <div className={styles.memberImage}>
                <Image 
                  src="/images/Team1.webp" 
                  alt="Emma Richardson"
                  fill
                  className={styles.image}
                />
              </div>
              <h3>Emma Richardson</h3>
              <p className={styles.role}>Founder & Head Florist</p>
            </div>
            
            <div className={styles.teamMember}>
              <div className={styles.memberImage}>
                <Image 
                  src="/images/Team2.jpg" 
                  alt="James Chen"
                  fill
                  className={styles.image}
                />
              </div>
              <h3>James Chen</h3>
              <p className={styles.role}>Lead Designer</p>
            </div>
            
            <div className={styles.teamMember}>
              <div className={styles.memberImage}>
                <Image 
                  src="/images/Team3.jpg" 
                  alt="Sarah Johnson"
                  fill
                  className={styles.image}
                />
              </div>
              <h3>Sarah Johnson</h3>
              <p className={styles.role}>Customer Relations</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;