import {
  FaJs,
  FaReact,
  FaHtml5,
  FaDocker,
  FaJava,
  FaNode,
  FaPython,
} from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
   const skillsArr = [
     {
       name: 'Java/Spring',
       icon: FaJava,
     },
     {
       name: 'Reactjs',
       icon: FaReact,
     },
     {
       name: 'JavaScript',
       icon: FaJs,
     },
     {
       name: 'NodeJs',
       icon: FaNode,
     },
     {
       name: 'Python',
       icon: FaPython,
     },
     {
       name: 'HTML/CSS',
       icon: FaHtml5,
     },
     {
       name: 'Docker',
       icon: FaDocker,
     }
   ];

  return (
    <div id="skills" className="skills">
      <h2 className="title">Skills</h2>
      <div className="skill-holder">
        {skillsArr.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <i key={index} className="skill-cards">
              <Icon className="skill-icon" />
              <p className="skill">{skill.name}</p>
            </i>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
