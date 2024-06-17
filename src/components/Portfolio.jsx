import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      name: 'Project 1',
      image: 'image1.jpg',
      stack: 'NoSQL',
      github: 'https://github.com/PPeterson609/socialNetworkAPILinks'
    },
    {
      id: 2,
      name: 'Project 2',
      image: 'image2.jpg',
      stack: 'OOP',
      github: 'https://github.com/PPeterson609/socialNetworkAPILinks to an external site.'
    },
  ];

  return (
    <section className="portfolio-section">
      <h2>Portfolio</h2>
      <br />
      <div className="portfolio-grid">
        {projects.map(project => (
          <div key={project.id} className="portfolio-item">
            <img src={project.image} alt={project.name} />
            <div className="overlay">
              <div className="overlay-content">
                <h3>{project.name}</h3>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
                <h4>{project.stack}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
