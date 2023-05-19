import { Link } from "react-router-dom";
import backgroundImage from "../assets/pizza.jpg";
import "../styles/Home.css";
export const Home = () => {
  return (
    <div
      className="home"
      style={{
        background: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100vh",
      }}
    >
      <div className="headerContainer">
        <h1>Pizza Shop</h1>
        <p>Pizza is always the answer</p>
        <Link to="/menu">
          <button>Order Now</button>
        </Link>
      </div>
    </div>
  );
};
