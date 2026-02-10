import { locations } from "../data/locations";

export default function Locations() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      
      {/* Page Header */}
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-gray-800">
          Our Locations
        </h1>
        <p className="text-gray-600 mt-2">
          Discover beautiful stays across Ghana
        </p>
      </div>

      {/* Locations Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {locations.map((location) => (
          <div
            key={location.id}
            className="relative h-72 rounded-xl overflow-hidden shadow-lg group"
          >
            {/* Background Image */}
            <img
              src={location.image}
              alt={location.city}
              className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content */}
            <div className="relative z-10 p-6 h-full flex flex-col justify-end text-white">
              <h2 className="text-2xl font-semibold">
                {location.city}
              </h2>
              <p className="text-sm mt-1">
                {location.description}
              </p>
              <span className="text-sm mt-3 font-medium">
                {location.properties} Properties Available
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
