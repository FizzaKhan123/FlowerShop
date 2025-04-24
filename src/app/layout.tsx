import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Navbar from '@components/Navbar/Navbar';
import Footer from '@components/Footer/Footer';

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'] 
});

export const metadata: Metadata = {
  title: 'Petal Paradise | Premium Flower Shop',
  description: 'Beautiful flowers for all occasions',
  keywords: 'flowers, bouquets, wedding flowers, flower delivery',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        <main className="main-container">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}