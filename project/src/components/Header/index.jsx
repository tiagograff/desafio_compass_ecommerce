import "../../styles/header.css";
import Logo from "./Logo";
import NavBar from "./NavBar";
import Icons from "./Icons";

export default function Header() {
  return (
    <>
      <header>
        <Logo />
        <NavBar />
        <Icons />
      </header>
    </>
  );
}
