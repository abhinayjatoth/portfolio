import IMG from '../assets/Detective.png';

const About = () => {
  return (
    <div id="about" className="about">
      <h1 className="about-heading">About Me</h1>
      <div className="about-info">
        <p className="about-desc">
          I'm a software developer with 6 years of diversified experience in
          designing and building complex web applications, data pipelines and
          API designing/development. Always eager to add new skills to my stack
          and am best known for my analytical & problem-solving approach.
          Pursued Master's in Computer Science at San Jose State University with
          a focus on Machine Learning and Bigdata..
        </p>
        <div className="about-img">
          <div className="about-img-wrapper">
            <img src={IMG} alt="Detective" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
