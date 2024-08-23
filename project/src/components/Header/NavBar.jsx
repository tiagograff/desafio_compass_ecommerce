import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="nav-bar">
      <ul className="nav-list">
        <Link className="nav-link-menu" id="nav-link-menu-active">
          Home
        </Link>
        <Link className="nav-link-menu">Shop</Link>
        <Link className="nav-link-menu">About</Link>
        <Link className="nav-link-menu">Contact</Link>
      </ul>
    </nav>
  );
}
