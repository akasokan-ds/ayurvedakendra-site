import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary-green dark:bg-dark-charcoal text-white py-8 mt-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4">Ayurveda Kendra</h3>
            <p className="text-gray-300">NABH certified Ayurvedic healing centre in Delhi, Gurgaon, Kerala & Hastinapur.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-secondary-gold">About Dr. Sudha</Link></li>
              <li><Link href="/treatments" className="hover:text-secondary-gold">Treatments</Link></li>
              <li><Link href="/locations" className="hover:text-secondary-gold">Locations</Link></li>
              <li><Link href="/contact" className="hover:text-secondary-gold">Book Appointment</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/panchakarma" className="hover:text-secondary-gold">Panchakarma</Link></li>
              <li><Link href="/massages" className="hover:text-secondary-gold">Massages</Link></li>
              <li><Link href="/wellness" className="hover:text-secondary-gold">Wellness Therapies</Link></li>
              <li><Link href="/conditions" className="hover:text-secondary-gold">Conditions Treated</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-gray-300 mb-2">011 26182022</p>
            <p className="text-gray-300 mb-4">info@ayurveda-kendra.com</p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com/AyurvedaKendra" className="text-gray-300 hover:text-secondary-gold">📘</Link>
              <Link href="https://twitter.com/drasokan" className="text-gray-300 hover:text-secondary-gold">🐦</Link>
              <Link href="https://linkedin.com/in/sudha-asokan" className="text-gray-300 hover:text-secondary-gold">💼</Link>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">© 2026 Ayurveda Kendra. NABH Certified.</p>
        </div>
      </div>
    </footer>
  );
}