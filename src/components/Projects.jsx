import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";

const Projects = () => {
    return(
        <div>
            <NavBar></NavBar>
            <section className="center">
      <div id="project">
        <h2 id="projects">./PROJECTS</h2>

        <div className="project-container">
          <div className="repository-container">
            <div className="repository-head">
              <a href="dice/index.html" target="_blank">
                <h3>2 Player Dice Game</h3>
              </a>
              <a href="dice/index.html" target="_blank">
                <img width="16" height="16" src="./asset/svg/external-link.png" alt="external-link" />
              </a>
            </div>

            <p className="repository-description">Two Player Dice Game.</p>
            <div className="repository-language-used-container">
              <span className="language-used">HTML</span>
              <span className="language-used">CSS</span>
              <span className="language-used">Javascript</span>
            </div>
          </div>
          <div className="repository-container">
            <div className="repository-head">
              <a href="https://github.com/falcon71181/ToDo_List/tree/main" target="_blank">
                <h3>ToDo_List</h3>
              </a>
              <a href="https://github.com/falcon71181/ToDo_List/tree/main" target="_blank">
                <img width="16" height="16" src="./asset/svg/external-link.png" alt="external-link" />
              </a>
            </div>

            <p className="repository-description">ToDo list web application using Flask</p>
            <div className="repository-language-used-container">
              <span className="language-used">Python(Flask)</span>
              <span className="language-used">HTML</span>
              <span className="language-used">CSS</span>
              <span className="language-used">Javascript</span>
            </div>
          </div>
          <div className="repository-container">
            <div className="repository-head">
              <a href="https://falcon71181.github.io/project/" target="_blank" rel="noopener noreferrer">
                <h3>Malware Analysis Blog</h3>
              </a>
              <a href="https://falcon71181.github.io/project/" target="_blank">
                <img width="16" height="16" src="./asset/svg/external-link.png" alt="external-link" />
              </a>
            </div>

            <p className="repository-description">Analysis of various Malwares, Rats, rootkits, Stealers</p>
            <div className="repository-language-used-container">
              <span className="language-used">HTML</span>
              <span className="language-used">CSS</span>
              <span className="language-used">Javascript</span>
            </div>
          </div>
          <div className="repository-container">
            <div className="repository-head">
              <a href="https://github.com/falcon71181/Encryption_algo" target="_blank">
                <h3>Encryption Algorithm</h3>
              </a>
              <a href="https://github.com/falcon71181/Encryption_algo" target="_blank">
                <img width="16" height="16" src="./asset/svg/external-link.png" alt="external-link" />
              </a>
            </div>

            <p className="repository-description">Encrypt your message with strong encryption using Mathematical equations.</p>
            <div className="repository-language-used-container">
              <span className="language-used">Python(base64)</span>
              <span className="language-used">Python(ChaCha20)</span>
            </div>
          </div>
        </div>
        <div className="repository-container more-repo">
          more at&nbsp;&nbsp;
          <a href="https://github.com/falcon71181" target="_blank">
            GITHUB <img src="./asset/svg/external-link.png" alt="" />
          </a>
        </div>
      </div>
    </section>
    <Footer></Footer>
        </div>
    );
}
export default Projects;