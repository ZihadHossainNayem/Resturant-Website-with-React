import "../styles/Contact.css";
import ContactImage from "../assets/ContactImage.jpg";
export const Contact = () => {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${ContactImage})` }}
      ></div>
      <div className="rightSide">
        <h1>Contact Us</h1>
        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input type="text" name="name" placeholder="Enter full name..." />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="Enter your email..." />
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            rows="10"
            placeholder="Enter your message here..."
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};
