import { useState } from "react";
import NavList from "./NavList";
export default function NavBar() {
  const [showNav, setShowNav] = useState(false);

  const handleShowNav = () => {
    setShowNav((prevShow) => !prevShow);
  };

  return (
    <div className="nav-container">
      <button className="open-btn" onClick={handleShowNav}>
        ≡
      </button>
      {showNav ? <NavList handleShowNav={handleShowNav} /> : null}
    </div>
  );
}
