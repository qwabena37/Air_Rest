export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      
      {/* Page Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800">
          Contact Us
        </h1>
        <p className="text-gray-600 mt-2">
          We’d love to hear from you. Reach out anytime.
        </p>
      </div>

      {/* Contact Content */}
      <div className="grid md:grid-cols-2 gap-10">
        
        {/* Contact Information */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-2">
              Our Office
            </h2>
            <p className="text-gray-600">
              StayEase Homes Ltd<br />
              East Legon, Accra<br />
              Ghana
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-2">
              Contact Details
            </h2>
            <p className="text-gray-600">
              📞 Phone: +233 24 123 4567 <br />
              📧 Email: info@stayease.com
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-2">
              Business Hours
            </h2>
            <p className="text-gray-600">
              Monday – Friday: 8:00 AM – 6:00 PM <br />
              Saturday: 9:00 AM – 3:00 PM
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">
            Send Us a Message
          </h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            <button
              type="button"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
