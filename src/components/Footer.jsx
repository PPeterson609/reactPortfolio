import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => (
  <footer>
    <a href="https://github.com/profile" className="icon">
      <FontAwesomeIcon icon={faGithub} size="2x" />
    </a>
    <a href="https://linkedin.com/in/profile" className="icon">
      <FontAwesomeIcon icon={faLinkedin} size="2x" />
    </a>
    <a href="https://twitter.com/profile" className="icon">
      <FontAwesomeIcon icon={faTwitter} size="2x" />
    </a>
  </footer>
);

export default Footer;
