import React from 'react'

class About extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="row">
        <div className="twelve columns">
          <img className="profile-img" src="me.png" alt="project-img" />
          <h5 className="about">Hello!</h5>
          <p>I'm Vesa Kivistö, a web developer ready to conquer the world. I have experience in full-stack development with some interest in artificial intelligence as well.
            I'm always looking forward to learning something new.</p>
          <p>I've always been interested in information and communications technology as well as programming, which led to me starting to study software development at
            Saimaa Vocational College Sampo. After graduation from Sampo with a Vocational Qualification and a Matriculation Examination Certificate, I started my studies in
            software engineering at JAMK University of Applied Sciences, from which I graduated in December 2017 with a Bachelor's Degree. I plan on studying data analytics and machine
            learning in 2020.</p>
          <p>I spend my spare time usually by playing video games and listening to music. Lately I've picked up playing piano as a hobby.
            Other than that, I also enjoy reading fantasy and sci-fi books and taking walks to clear my mind.</p>
        </div>
      </div>
    );
  }
}

export default About;
