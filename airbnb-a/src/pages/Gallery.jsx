import { properties } from "../data/properties";

export default function Gallery() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      
      {/* Page Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800">
          Property Gallery
        </h1>
        <p className="text-gray-600 mt-2">
          Explore our curated collection of beautiful homes
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {properties.map((property) => (
          <div
            key={property.id}
            className="relative h-72 rounded-xl overflow-hidden group shadow-lg"
          >
            {/* Property Image */}
            <img
              src={property.images[0]}
              alt={property.title}
              className="h-full w-full object-cover group-hover:scale-105 transition duration-300"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition"></div>

            {/* Property Info */}
            <div className="absolute inset-0 p-4 flex flex-col justify-end text-white opacity-0 group-hover:opacity-100 transition">
              <h3 className="text-lg font-semibold">
                {property.title}
              </h3>
              <p className="text-sm">
                {property.location}
              </p>
              <p className="font-bold mt-1">
                ${property.pricePerDay} / day
              </p>
            </div>

            {/* Availability Badge */}
            <span
              className={`absolute top-4 left-4 text-xs px-3 py-1 rounded-full font-medium ${
                property.available
                  ? "bg-green-600 text-white"
                  : "bg-red-500 text-white"
              }`}
            >
              {property.available ? "Available" : "Booked"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
