import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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
