export default function SearchFilters({
  filters,
  setFilters,
}) {
  return (
    <div className="bg-white p-4 rounded-xl shadow mb-6 grid md:grid-cols-4 gap-4">
      
      <input
        type="text"
        placeholder="Location"
        className="border rounded p-2"
        value={filters.location}
        onChange={(e) =>
          setFilters({ ...filters, location: e.target.value })
        }
      />

      <input
        type="number"
        placeholder="Min price"
        className="border rounded p-2"
        value={filters.minPrice}
        onChange={(e) =>
          setFilters({ ...filters, minPrice: e.target.value })
        }
      />

      <input
        type="number"
        placeholder="Max price"
        className="border rounded p-2"
        value={filters.maxPrice}
        onChange={(e) =>
          setFilters({ ...filters, maxPrice: e.target.value })
        }
      />

      <select
        className="border rounded p-2"
        onChange={(e) =>
          setFilters({ ...filters, feature: e.target.value })
        }
      >
        <option value="">Any Feature</option>
        <option value="WiFi">WiFi</option>
        <option value="Parking">Parking</option>
        <option value="Pool">Pool</option>
      </select>
    </div>
  );
}
