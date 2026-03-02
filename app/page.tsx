import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        {/* Content sections will go here */}
        <section className="py-16 bg-white dark:bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold text-primary-green mb-6">Why Choose Ayurveda Kendra?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-dark-charcoal dark:text-gray-200">Expert Doctors</h3>
                <p className="text-gray-600 dark:text-gray-400">Dr. Sudha Asokan with 35+ years of experience in authentic Ayurvedic treatments.</p>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-dark-charcoal dark:text-gray-200">NABH Certified</h3>
                <p className="text-gray-600 dark:text-gray-400">India&apos;s premier certification for quality healthcare services.</p>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-dark-charcoal dark:text-gray-200">Multiple Locations</h3>
                <p className="text-gray-600 dark:text-gray-400">Delhi, Gurgaon, Kerala, and Hastinapur for easy access.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}