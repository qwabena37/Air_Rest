import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12 grid gap-10 md:grid-cols-4">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white">
            Stay<span className="text-blue-500">Ease</span>
          </h2>
          <p className="text-sm mt-4 leading-relaxed">
            StayEase connects you to beautiful homes and apartments
            across Ghana, offering comfort, convenience and trust.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <NavLink to="/" className="hover:text-white">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:text-white">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/locations" className="hover:text-white">
                Locations
              </NavLink>
            </li>
            <li>
              <NavLink to="/gallery" className="hover:text-white">
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:text-white">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Locations */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Locations
          </h3>
          <ul className="space-y-2">
            <li>Accra</li>
            <li>Kumasi</li>
            <li>Bolgatanga</li>
            <li>Tamale</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Contact
          </h3>
          <p className="text-sm">
            📍 Taifa, Accra<br />
            📞 +233 55 075 0090<br />
            📞 +233 55 075 0090<br />
            📧 info@stayease.com
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-4 text-center text-sm">
        © {new Date().getFullYear()} StayEase. All rights reserved.
      </div>
    </footer>
  );
}
