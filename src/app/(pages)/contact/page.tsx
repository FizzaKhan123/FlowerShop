'use client';
import React from 'react';
import styles from './Contact.module.css';
import Head from 'next/head';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <>
      <Head>
        <title>Flower Shop - main</title>
        <meta name="description" content="Get in touch with our flower shop" />
      </Head>
      
      <main className={styles.contactContainer}>
        <h1 className={styles.contactTitle}>Contact Us</h1>
        <p className={styles.contactSubtitle}>We'd love to hear from you!</p>
        
        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <h2 className={styles.infoTitle}>Our Shop</h2>
            <p className={styles.infoText}>
              <strong>Address:</strong> 123 Flower Street, Garden City
            </p>
            <p className={styles.infoText}>
              <strong>Phone:</strong> (123) 456-7890
            </p>
            <p className={styles.infoText}>
              <strong>Email:</strong> info@flowershop.com
            </p>
            <p className={styles.infoText}>
              <strong>Hours:</strong> Mon-Fri: 9am-7pm, Sat-Sun: 10am-5pm
            </p>
          </div>
          
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.formLabel}>
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className={styles.formInput}
                required
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.formLabel}>
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className={styles.formInput}
                required
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="subject" className={styles.formLabel}>
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className={styles.formInput}
                required
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.formLabel}>
                Message
              </label>
              <textarea
                id="message"
                className={styles.formTextarea}
                rows={5}
                required
              ></textarea>
            </div>
            
            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </form>
        </div>
      </main>
    </>
  );
};

export default Contact;