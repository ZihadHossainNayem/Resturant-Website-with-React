import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIconIcon from "@mui/icons-material/LinkedIn";
import "../styles/Footer.css";

export const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="socialMedia">
          <InstagramIcon />
          <TwitterIcon />
          <FacebookIcon />
          <LinkedInIconIcon />
        </div>
        <p>&copy; 2023 pizzashop</p>
      </div>
    </div>
  );
};
