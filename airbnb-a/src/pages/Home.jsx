import { useState } from "react";
import { properties } from "../data/properties";
import PropertyCard from "../components/PropertyCard";
import SearchFilters from "../components/SearchFilters";

export default function Home() {
  const [filters, setFilters] = useState({
    location: "",
    minPrice: "",
    maxPrice: "",
    feature: "",
  });

  const filteredProperties = properties.filter((property) => {
    return (
      property.location
        .toLowerCase()
        .includes(filters.location.toLowerCase()) &&
      (!filters.minPrice || property.pricePerDay >= filters.minPrice) &&
      (!filters.maxPrice || property.pricePerDay <= filters.maxPrice) &&
      (!filters.feature || property.features.includes(filters.feature))
    );
  });

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <SearchFilters filters={filters} setFilters={setFilters} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </>
  );
}
