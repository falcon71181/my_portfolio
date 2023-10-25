import React from 'react';
import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer';

const Contact = () => {
  return (
    <div>
      <NavBar></NavBar>

      <section className="center">
        <div id="project">
          <h2 id="projects">./CONTACT ME</h2>
          <div className="contact-container">
            <div className="repository-container">
              <div className="repository-head">
                <section className="contact" id="contact">
                  <div className="max-width">
                    <div className="contact-content">
                      <div className="column left">
                        <div className="text">
                          <h3>DM Me! -</h3>
                        </div>
                      </div>
                      <ul className="about-social-container">
                        <li>
                          <img src="./asset/svg/github.svg" alt="Github" />
                          <a href="https://github.com/falcon71181/">Github</a>
                        </li>
                        <li>
                          <img src="./asset/svg/mail.svg" alt="MAIL" />
                          <a href="mailto:falconclutch71@gmail.com">Mail</a>
                        </li>
                        <li>
                          <img src="./asset/svg/linkedin.svg" alt="LinkedIn" />
                          <a href="https://www.linkedin.com/in/abhay-thakur-73470b287/"> LinkedIn</a>
                        </li>
                        <li>
                          <img src="./asset/svg/insta.svg" width="16" height="16" alt="Instagram" />
                          <a href="https://www.instagram.com/falcon71181/"> Instagram</a>
                        </li>
                        <li>
                          <img src="./asset/svg/twitterx.svg" alt="TwitterX" />
                          <a href="https://twitter.com/elonmusk?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"> TwitterX</a>
                        </li>
                      </ul>
                    </div>
                    <div className="column right">
                      <form action="#">
                        <div className="fields">
                          <div className="field name">
                            <input type="text" placeholder="Name" required />
                          </div>
                          <div className="field email">
                            <input type="email" placeholder="Email" name="email" required />
                          </div>
                        </div>
                        <div className="field">
                          <input type="text" placeholder="Subject" required />
                        </div>
                        <div className="field textarea">
                          <textarea cols="50" rows="10" placeholder="Your message..." required />
                        </div>
                        <div className="button">
                          <button type="submit">Send Message</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </div>
  );
};

export default Contact;
