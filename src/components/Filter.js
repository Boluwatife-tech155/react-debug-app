export default function Filter({
  search,
  setSearch,
  rating,
  setRating
}) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search title"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <input
        type="number"
        placeholder="Minimum rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
    </div>
  );
}