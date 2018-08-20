import React from 'react'
import cvJSON from '../data/cv.json'

class CV extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const personalInfo = cvJSON.personalInfo.map(data => {
      return (
        <p key={data.key} className="cv-info"><span>{data.title}</span> <span>{data.description}</span></p>
      );
    });

    const workExperience = cvJSON.workExperience.map(data => {
      const workData = data.work.map((workData, index) => {
        return (
          <div key={index}>
            <p>{workData.title}, {workData.duration}</p>
            <p>{workData.description}</p>
          </div>
        );
      });

      return (
        <div key={data.key}>
          <h6>{data.title}</h6>
          {workData}
        </div>
      )
    });

    const education = cvJSON.education.map(data => {
      return (
        <div key={data.key}>
          <h6>{data.title}</h6>
          <p>{data.school}, {data.duration}</p>
          <p>{data.description}</p>
        </div>
      );
    });

    const languages = cvJSON.languages.map(data => {
      return (
        <p key={data.key} className="cv-info"><span>{data.title}</span> <span>{data.level}</span></p>
      );
    });

    const skills = cvJSON.skills.map((data, index) => {
        return (
          <span key={index} className="skill">{data.title}</span>
        );
      });

    return (
      <div className="row">
        <div className="twelve column">
          <h5>Personal info</h5>
          <hr />
          <div>{personalInfo}</div>

          <h5>Work experience</h5>
          <hr />
          <div>{workExperience}</div>

          <h5>Education</h5>
          <hr />
          <div>{education}</div>

          <h5>Languages</h5>
          <hr />
          <div>{languages}</div>

          <h5>Technical skills</h5>
          <hr />
          <div>{skills}</div>
        </div>
      </div>
    );
  }
}

export default CV;
