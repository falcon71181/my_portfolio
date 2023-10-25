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
                        <div className="contact_button">
                        <button type='submit'>
  <div class="svg-wrapper-1">
    <div class="svg-wrapper">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path
          fill="currentColor"
          d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
        ></path>
      </svg>
    </div>
  </div>
  <span>Send Message</span>
</button>

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
