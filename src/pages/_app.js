import '@/styles/globals.css';  // Import global CSS
import Navbar from '@/components/Navbar'; // Import Navbar
import Footer from '@/components/Footer'; // Import Footer

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <main className="max-w-4xl mx-auto p-6">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
