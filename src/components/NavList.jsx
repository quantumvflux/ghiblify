import "./../App.css";

export default function NavList({ handleShowNav }) {
  return (
    <nav>
      <ul>
        <li>
          <button className="close-btn" onClick={handleShowNav}>
            ⨯
          </button>
        </li>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Movies</a>
        </li>
        <li>
          <a href="#">Characters</a>
        </li>
        <li>
          <a href="#">Info</a>
        </li>
      </ul>
    </nav>
  );
}
