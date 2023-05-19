import AboutImage from "../assets/AboutImage.jpg";
import "../styles/About.css";

export const About = () => {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${AboutImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1>About Us</h1>
        <p>
          "Welcome to our pizza shop, where passion meets flavor! At our pizza
          shop, we are dedicated to serving you the most delicious and
          mouthwatering pizzas in town. Our team of talented chefs combines
          traditional recipes with creative flair to bring you a unique dining
          experience. We handcraft each pizza with love, using only the freshest
          ingredients sourced from local farmers and suppliers. From the moment
          you step into our cozy and inviting atmosphere, you'll be greeted by
          the enticing aroma of freshly baked pizzas. Whether you prefer classic
          favorites like Margherita and Pepperoni or crave bold and innovative
          toppings, our extensive menu has something to satisfy every pizza
          lover. We take pride in delivering not only exceptional taste but also
          outstanding customer service. Our friendly staff is here to ensure
          that your dining experience is nothing short of perfection. Whether
          you're joining us for a family gathering, a casual lunch, or a night
          out with friends, our pizza shop provides a welcoming environment for
          all. We believe that pizza is more than just food—it's a shared
          experience that brings people together. So come on in, savor every
          bite of our delectable pizzas, and create lasting memories with your
          loved ones. Thank you for choosing our pizza shop, and we look forward
          to serving you the finest pizzas that will keep you coming back for
          more.
        </p>
      </div>
    </div>
  );
};
