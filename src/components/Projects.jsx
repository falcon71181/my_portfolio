import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";
import ProjList from "./Proj_List/ProjList";

const Projects = () => {
    return(
        <div>
            <NavBar></NavBar>
            <section className="center">
      <div id="project">
        <h2 id="projects">./PROJECTS</h2>
        <ProjList></ProjList>
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