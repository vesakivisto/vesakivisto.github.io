import React from 'react'

class About extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="row">
        <div className="twelve columns">
          <img className="profile-img" src="me.jpg" alt="project-img" />
          <h5 className="about">Hello!</h5>
          <p>I'm Vesa Kivistö, an aspiring developer ready to conquer the world. I'm mostly interested in web development, though lately I have gained interest in mobile development
            and artificial intelligence as well. I have experience in full-stack development and I'm always looking forward to learning something new.</p>
          <p>I've always been interested in information and communications technology as well as programming, which led to me starting to study software development at
            Saimaa Vocational College Sampo. After graduation from Sampo with a Vocational Qualification and a Matriculation Examination Certificate, I started my studies in
            software engineering at JAMK University of Applied Sciences, from which I graduated in December 2017 with a Bachelor's Degree. I plan on studying data analytics and machine
            learning in 2020.</p>
          <p>I spend my spare time usually by playing video games and listening to music. I also enjoy photographing, though the progression with photographing has been
            a slow one. Other than that, I also enjoy reading fantasy and sci-fi books and taking walks to clear my mind.</p>
        </div>
      </div>
    );
  }
}

export default About;
