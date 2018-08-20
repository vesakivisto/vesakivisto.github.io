import React from 'react';
import portfolioJSON from '../data/portfolio.json';

class Portfolio extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const projects = portfolioJSON.map(data => {
      return (
        <div key={data.key} className="row portfolio-item">
            <div className="five columns">
              <img src={data.image} alt="project-img" />
            </div>
            <div className="seven columns">
              <h6>{data.title}</h6>
              <p>{data.description}</p>
            </div>
        </div>
      );
    });

    return (
      <div className="portfolio-header">
        <h5>Projects</h5>
        <div>{projects}</div>
      </div>
    );
  }
}

export default Portfolio;
