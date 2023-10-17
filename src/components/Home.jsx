import NavBar from "./NavBar/NavBar";
import Center from "./Center/Center";
import Skills from "./Skills/Skills";
import Footer from "./Footer/Footer";
import './Home.css';

const Home = () => {
    return(
        <div className="home">
            <NavBar></NavBar>
            <Center></Center>
            <Skills></Skills>
            <Footer></Footer>
        </div>
    );
};

export default Home;