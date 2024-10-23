import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Avatar from '../assets/Software.png';

const Body = () => {
  return (
    <div id="body" className="body">
      <div className="body-container">
        <div className="body-profile">
          <img className="body-img" alt="avatar" src={Avatar} />

          <div className="body-content">
            <div className="body-headline">Abhinay Jatoth</div>
            <div className="body-text">Software Developer</div>
          </div>

          <div className="body-icons">
            <a
              href="https://github.com/abhinayjatoth"
              target="_blank"
              rel="noreferrer"
              className="icon-link"
            >
              <i>
                <FaGithub />
              </i>{' '}
            </a>
            <a
              href="https://www.linkedin.com/abhinayjatoth"
              target="_blank"
              rel="noreferrer"
              className="icon-link"
            >
              <i>
                <FaLinkedin />
              </i>{' '}
            </a>
            <a
              href="https://www.instagram.com/abhinay_jatoth/"
              target="_blank"
              rel="noreferrer"
              className="icon-link"
            >
              <i>
                <FaInstagram />
              </i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
