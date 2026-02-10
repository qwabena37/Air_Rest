export default function PropertyCard({ property }) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition">
      <img
        src={property.images[0]}
        alt={property.title}
        className="h-48 w-full object-cover rounded-t-xl"
      />

      <div className="p-4">
        <h3 className="text-lg font-semibold">{property.title}</h3>
        <p className="text-sm text-gray-500">{property.location}</p>

        <div className="flex flex-wrap gap-2 mt-2">
          {property.features.map((feature) => (
            <span
              key={feature}
              className="text-xs bg-gray-100 px-2 py-1 rounded"
            >
              {feature}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center mt-4">
          <p className="font-bold text-blue-600">
            GHS{property.pricePerDay}/day
          </p>

          <span
            className={`text-sm font-medium ${
              property.available ? "text-green-600" : "text-red-500"
            }`}
          >
            {property.available ? "Available" : "Booked"}
          </span>
        </div>
      </div>
    </div>
  );
}
