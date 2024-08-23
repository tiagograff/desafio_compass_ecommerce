import myImage from "../../assets/img/logo.svg";

export default function Logo() {
  return (
    <div className="logo">
      <img className="logo-img" src={myImage} alt="Logo Shop" />
      <h1 className="title">Furniro</h1>
    </div>
  );
}
