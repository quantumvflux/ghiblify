export default function SearchInput({ setSearchInput }) {
  return (
    <div className="search-input">
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
      />
    </div>
  );
}
