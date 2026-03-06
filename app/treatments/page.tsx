import Link from 'next/link';

export default function TreatmentsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-light-beige dark:bg-neutral-900 pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-green mb-4">
                Ayurvedic Treatments
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                Authentic therapies for healing and wellness
              </p>
            </div>
          </div>
        </section>

        {/* Panchakarma */}
        <section className="py-16 bg-white dark:bg-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-primary-green mb-4">
                Panchakarma Therapies
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                Deep detoxification and rejuvenation
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 bg-light-beige dark:bg-neutral-800 rounded-lg shadow-lg">
                <h3 className="text-xl font-serif font-bold text-primary-green mb-4">Vamana</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Therapeutic emesis for Kapha disorders
                </p>
                <Link
                  href="/panchakarma/vamana"
                  className="inline-flex items-center justify-center px-6 py-2 bg-primary-green text-white rounded-full font-semibold hover:bg-primary-green/90 transition-colors"
                >
                  Learn More
                </Link>
              </div>
              <div className="p-6 bg-light-beige dark:bg-neutral-800 rounded-lg shadow-lg">
                <h3 className="text-xl font-serif font-bold text-primary-green mb-4">Virechana</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Purgation therapy for Pitta disorders
                </p>
                <Link
                  href="/panchakarma/virechana"
                  className="inline-flex items-center justify-center px-6 py-2 bg-primary-green text-white rounded-full font-semibold hover:bg-primary-green/90 transition-colors"
                >
                  Learn More
                </Link>
              </div>
              <div className="p-6 bg-light-beige dark:bg-neutral-800 rounded-lg shadow-lg">
                <h3 className="text-xl font-serif font-bold text-primary-green mb-4">Basti</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Medicated enema for Vata disorders
                </p>
                <Link
                  href="/panchakarma/basti"
                  className="inline-flex items-center justify-center px-6 py-2 bg-primary-green text-white rounded-full font-semibold hover:bg-primary-green/90 transition-colors"
                >
                  Learn More
                </Link>
              </div>
              <div className="p-6 bg-light-beige dark:bg-neutral-800 rounded-lg shadow-lg">
                <h3 className="text-xl font-serif font-bold text-primary-green mb-4">Nasya</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Nasal administration for head disorders
                </p>
                <Link
                  href="/panchakarma/nasya"
                  className="inline-flex items-center justify-center px-6 py-2 bg-primary-green text-white rounded-full font-semibold hover:bg-primary-green/90 transition-colors"
                >
                  Learn More
                </Link>
              </div>
              <div className="p-6 bg-light-beige dark:bg-neutral-800 rounded-lg shadow-lg">
                <h3 className="text-xl font-serif font-bold text-primary-green mb-4">Raktamokshana</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Blood purification therapy
                </p>
                <Link
                  href="/panchakarma/raktamokshana"
                  className="inline-flex items-center justify-center px-6 py-2 bg-primary-green text-white rounded-full font-semibold hover:bg-primary-green/90 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Massages */}
        <section className="py-16 bg-light-beige dark:bg-neutral-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-primary-green mb-4">
                Ayurvedic Massages
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                Therapeutic and relaxation massages
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 bg-white dark:bg-neutral-800 rounded-lg shadow-lg">
                <h3 className="text-xl font-serif font-bold text-primary-green mb-4">Abhyanga</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Full body oil massage for relaxation
                </p>
                <Link
                  href="/massages/abhyanga"
                  className="inline-flex items-center justify-center px-6 py-2 bg-primary-green text-white rounded-full font-semibold hover:bg-primary-green/90 transition-colors"
                >
                  Learn More
                </Link>
              </div>
              <div className="p-6 bg-white dark:bg-neutral-800 rounded-lg shadow-lg">
                <h3 className="text-xl font-serif font-bold text-primary-green mb-4">Shirodhara</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Oil pouring on forehead for mental peace
                </p>
                <Link
                  href="/massages/shirodhara"
                  className="inline-flex items-center justify-center px-6 py-2 bg-primary-green text-white rounded-full font-semibold hover:bg-primary-green/90 transition-colors"
                >
                  Learn More
                </Link>
              </div>
              <div className="p-6 bg-white dark:bg-neutral-800 rounded-lg shadow-lg">
                <h3 className="text-xl font-serif font-bold text-primary-green mb-4">Pizhichil</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Oil bath for rejuvenation
                </p>
                <Link
                  href="/massages/pizhichil"
                  className="inline-flex items-center justify-center px-6 py-2 bg-primary-green text-white rounded-full font-semibold hover:bg-primary-green/90 transition-colors"
                >
                  Learn More
                </Link>
              </div>
              <div className="p-6 bg-white dark:bg-neutral-800 rounded-lg shadow-lg">
                <h3 className="text-xl font-serif font-bold text-primary-green mb-4">Udwarthanam</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Powder massage for weight loss
                </p>
                <Link
                  href="/massages/udwarthanam"
                  className="inline-flex items-center justify-center px-6 py-2 bg-primary-green text-white rounded-full font-semibold hover:bg-primary-green/90 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Kizhi */}
        <section className="py-16 bg-white dark:bg-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-primary-green mb-4">
                Kizhi Therapies
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                Potli massage treatments
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 bg-light-beige dark:bg-neutral-800 rounded-lg shadow-lg">
                <h3 className="text-xl font-serif font-bold text-primary-green mb-4">Podikizhi</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Herbal powder bolus massage
                </p>
                <Link
                  href="/kizhi/podikizhi"
                  className="inline-flex items-center justify-center px-6 py-2 bg-primary-green text-white rounded-full font-semibold hover:bg-primary-green/90 transition-colors"
                >
                  Learn More
                </Link>
              </div>
              <div className="p-6 bg-light-beige dark:bg-neutral-800 rounded-lg shadow-lg">
                <h3 className="text-xl font-serif font-bold text-primary-green mb-4">Elakizhi</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Herbal leaf bolus massage
                </p>
                <Link
                  href="/kizhi/elakizhi"
                  className="inline-flex items-center justify-center px-6 py-2 bg-primary-green text-white rounded-full font-semibold hover:bg-primary-green/90 transition-colors"
                >
                  Learn More
                </Link>
              </div>
              <div className="p-6 bg-light-beige dark:bg-neutral-800 rounded-lg shadow-lg">
                <h3 className="text-xl font-serif font-bold text-primary-green mb-4">Narangakizhi</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Herbal fruit bolus massage
                </p>
                <Link
                  href="/kizhi/narangakizhi"
                  className="inline-flex items-center justify-center px-6 py-2 bg-primary-green text-white rounded-full font-semibold hover:bg-primary-green/90 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Other Therapies */}
        <section className="py-16 bg-light-beige dark:bg-neutral-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-primary-green mb-4">
                Other Therapies
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                Specialized Ayurvedic treatments
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 bg-white dark:bg-neutral-800 rounded-lg shadow-lg">
                <h3 className="text-xl font-serif font-bold text-primary-green mb-4">Vasthi</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Medicated oil enema
                </p>
                <Link
                  href="/vasthi"
                  className="inline-flex items-center justify-center px-6 py-2 bg-primary-green text-white rounded-full font-semibold hover:bg-primary-green/90 transition-colors"
                >
                  Learn More
                </Link>
              </div>
              <div className="p-6 bg-white dark:bg-neutral-800 rounded-lg shadow-lg">
                <h3 className="text-xl font-serif font-bold text-primary-green mb-4">Dharas</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Oil pouring therapies
                </p>
                <Link
                  href="/dharas"
                  className="inline-flex items-center justify-center px-6 py-2 bg-primary-green text-white rounded-full font-semibold hover:bg-primary-green/90 transition-colors"
                >
                  Learn More
                </Link>
              </div>
              <div className="p-6 bg-white dark:bg-neutral-800 rounded-lg shadow-lg">
                <h3 className="text-xl font-serif font-bold text-primary-green mb-4">Beauty Therapies</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Skin and beauty treatments
                </p>
                <Link
                  href="/beauty"
                  className="inline-flex items-center justify-center px-6 py-2 bg-primary-green text-white rounded-full font-semibold hover:bg-primary-green/90 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}