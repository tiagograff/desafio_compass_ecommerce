import user from "../../assets/img/icon user.svg";
import cart from "../../assets/img/icon car.svg";

export default function Icons() {
  return (
    <div className="icons">
      <img className="icon-img" src={user} alt="user login" />
      <img className="icon-img" src={cart} alt="cart" />
    </div>
  );
}
