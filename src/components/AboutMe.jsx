import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const AboutMe = () => (
  <section>
    <h2>About Me</h2>
    <br />
    <div className="user-icon">
      <FontAwesomeIcon icon={faUser} size="3x" />
    </div>
    <br />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis omnis,
      debitis a unde fuga quam earum? Optio perspiciatis soluta reprehenderit
      est odit quia libero animi amet impedit in. Molestias repellat tempore
      iure laudantium modi optio vero accusantium hic ipsam, iusto quo dolores
      quibusdam! Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Corporis omnis, debitis a unde fuga quam earum? Optio perspiciatis soluta
      reprehenderit est odit quia libero animi amet impedit in. Molestias
      repellat tempore iure laudantium modi optio vero accusantium hic ipsam,
      iusto quo dolores quibusdam!
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis omnis,
      debitis a unde fuga quam earum? Optio perspiciatis soluta reprehenderit
      est odit quia libero animi amet impedit in. Molestias repellat tempore
      iure laudantium modi optio vero accusantium hic ipsam, iusto quo dolores
      quibusdam!
    </p>
  </section>
);

export default AboutMe;
