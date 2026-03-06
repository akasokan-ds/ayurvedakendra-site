import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-light-beige dark:bg-neutral-900 pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-green mb-4">
                About Dr. Sudha Asokan
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                Trusted Ayurvedic physician with 35+ years of experience in authentic healing
              </p>
            </div>
          </div>
        </section>

        {/* Dr. Sudha Bio */}
        <section className="py-16 bg-white dark:bg-black">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="/dr-sudha.jpg" 
                  alt="Dr. Sudha Asokan" 
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-3xl font-serif font-bold text-primary-green mb-6">
                  Dr. Sudha Asokan
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                  With over 35 years of dedicated practice in Ayurveda, Dr. Sudha Asokan has helped tens of thousands of patients find relief from chronic conditions and lead healthier lives. Her expertise spans across traditional Ayurvedic treatments, Panchakarma therapies, and modern integrative approaches.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-primary-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-400">NABH Certified Physician</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-primary-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-400">35+ Years Experience</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-primary-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-400">Tens of Thousands Cured</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 bg-light-beige dark:bg-neutral-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-primary-green mb-4">
                Our Journey
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                Since 1990, Ayurveda Kendra has been a beacon of authentic healing
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-white dark:bg-neutral-800 rounded-lg shadow-lg">
                <h3 className="text-2xl font-serif font-bold text-primary-green mb-4">1990</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Ayurveda Kendra was established with a vision to provide authentic Ayurvedic healing to those in need.
                </p>
              </div>
              <div className="p-6 bg-white dark:bg-neutral-800 rounded-lg shadow-lg">
                <h3 className="text-2xl font-serif font-bold text-primary-green mb-4">2000s</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Expanded services to include specialized treatments for chronic conditions like arthritis, spondylitis, and psoriasis.
                </p>
              </div>
              <div className="p-6 bg-white dark:bg-neutral-800 rounded-lg shadow-lg">
                <h3 className="text-2xl font-serif font-bold text-primary-green mb-4">2010s</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Introduced modern Panchakarma therapies and established manufacturing unit for quality Ayurvedic products.
                </p>
              </div>
              <div className="p-6 bg-white dark:bg-neutral-800 rounded-lg shadow-lg">
                <h3 className="text-2xl font-serif font-bold text-primary-green mb-4">Today</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Serving patients across Delhi, Gurgaon, Kerala, and Hastinapur with NABH certified treatments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-16 bg-white dark:bg-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-primary-green mb-4">
                Our Philosophy
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                Healing through authentic Ayurvedic wisdom
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-light-beige dark:bg-neutral-800 rounded-lg">
                <h3 className="text-xl font-serif font-bold text-primary-green mb-4">Holistic Approach</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Treating the root cause, not just symptoms, through personalized care.
                </p>
              </div>
              <div className="p-6 bg-light-beige dark:bg-neutral-800 rounded-lg">
                <h3 className="text-xl font-serif font-bold text-primary-green mb-4">Traditional Wisdom</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Preserving ancient Ayurvedic knowledge while integrating modern science.
                </p>
              </div>
              <div className="p-6 bg-light-beige dark:bg-neutral-800 rounded-lg">
                <h3 className="text-xl font-serif font-bold text-primary-green mb-4">Quality Care</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Using only the highest quality herbs and oils from our own manufacturing unit.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 bg-light-beige dark:bg-neutral-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-primary-green mb-4">
                Our Expert Team
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                Dedicated professionals committed to your healing journey
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-white dark:bg-neutral-800 rounded-lg shadow-lg">
                <div className="mb-4">
                  <img src="/dr-sudha.jpg" alt="Dr. Sudha" className="rounded-full w-20 h-20 mx-auto" />
                </div>
                <h4 className="text-xl font-serif font-bold text-primary-green mb-2">Dr. Sudha Asokan</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Chief Physician</p>
                <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
                  35+ years of experience in Ayurvedic medicine
                </p>
              </div>
              <div className="p-6 bg-white dark:bg-neutral-800 rounded-lg shadow-lg">
                <div className="mb-4">
                  <div className="w-20 h-20 rounded-full bg-primary-green/20 flex items-center justify-center mx-auto">
                    <span className="text-primary-green font-bold">T1</span>
                  </div>
                </div>
                <h4 className="text-xl font-serif font-bold text-primary-green mb-2">Senior Therapist</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">15+ years experience</p>
                <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
                  Specialized in Panchakarma therapies
                </p>
              </div>
              <div className="p-6 bg-white dark:bg-neutral-800 rounded-lg shadow-lg">
                <div className="mb-4">
                  <div className="w-20 h-20 rounded-full bg-primary-green/20 flex items-center justify-center mx-auto">
                    <span className="text-primary-green font-bold">T2</span>
                  </div>
                </div>
                <h4 className="text-xl font-serif font-bold text-primary-green mb-2">Senior Therapist</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">15+ years experience</p>
                <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
                  Specialized in therapeutic massages
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}