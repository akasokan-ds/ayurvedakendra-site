import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-light-beige dark:bg-neutral-900 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="text-left">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary-green dark:text-primary-green leading-tight mb-4">
              Authentic Ayurveda <br /> in Delhi
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-serif mb-6">
              NABH Certified Healing for Arthritis, Skin, Neurology & Wellness
            </h2>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
              35+ years of trusted care from Dr. Sudha Asokan. Personalized Panchakarma & wellness therapies in Delhi, Gurgaon, Kerala & Hastinapur.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary-green text-white rounded-full font-semibold hover:bg-primary-green/90 transition-colors"
              >
                Book Appointment
              </Link>
              <Link
                href="/treatments"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary-green text-primary-green rounded-full font-semibold hover:bg-primary-green hover:text-white transition-colors"
              >
                Explore Treatments
              </Link>
            </div>
            {/* Trust Indicators */}
            <div className="mt-8 flex items-center gap-6">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-green" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-600 dark:text-gray-400">NABH Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-green" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-600 dark:text-gray-400">35+ Years Trust</span>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative">
            <div className="aspect-square rounded-full bg-primary-green/10 flex items-center justify-center">
              {/* Placeholder for clinic image - will replace with actual */}
              <div className="text-center p-8">
                <p className="text-gray-500 text-sm">[Clinic Image]</p>
                <p className="text-primary-green font-serif italic">Authentic Ayurvedic Care</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}