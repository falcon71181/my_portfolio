import React, { useEffect, useRef } from 'react';
import './Center.css';
import TextScramble from './TextScramble';

const Center = () => {
    const textRef = useRef(null);

    useEffect(() => {
        const phrases = [
            "- ",
            "-----",
            "----------------",
            "-----------------------------------------",
            "-------------------------------------------------------------------"
        ];

        const fx = new TextScramble(textRef.current);

        let counter = 0;
        const next = () => {
            fx.setText(phrases[counter]).then(() => {
                setTimeout(next, 800);
            });
            counter = (counter + 1) % phrases.length;
        };

        next();
    }, []);
    return (
        <div>
            <div className="center"> 
                <div id="about">
                    <div className="about-img-container"> 
                        <img width="150" height="150" src="./asset/img/unnamed.webp" alt="pfp" />
                    </div>
                    <h2 className="gradient">Abhay Thakur <img width="30" height="30" src="./asset/svg/india.svg" alt="India" /></h2>  
                    <ul className="about-social-container"> 
                        <li>
                            <img src="./asset/svg/github.svg" alt="Github" />
                            <a href="https://github.com/falcon71181/" target="_blank"> Github</a>
                        </li>

                        <li>
                            <img src="./asset/svg/mail.svg" alt="MAIL" />
                            <a href="mailto:falconclutch71@gmail.com"> Mail</a>
                        </li>

                        <li>
                            <img src="./asset/svg/linkedin.svg" alt="LinkedIn" />
                            <a href="https://www.linkedin.com/in/abhay-thakur-73470b287/" target="_blank"> LinkedIn</a>
                        </li>
                        <li>
                            <img src="./asset/svg/insta.svg" width="16" height="16" alt="Instagram" />
                            <a href="https://www.instagram.com/falcon71181/" target="_blank"> Instagram</a>
                        </li>
                        <li>
                            <img src="./asset/svg/twitterx.svg" alt="TwitterX" />
                            <a href="https://twitter.com/elonmusk?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank"> TwitterX</a>
                        </li>
                    </ul>
                    <p>
                    I'm a third-year college student currently pursuing my bachelor's degree in <b>Computer Science. </b><br />
                    <div className="text" ref={textRef}></div>
                    </p>
                    <h2 className='skill_heading'>./Skills</h2>
                </div>
            </div>
        </div>
    );
};

export default Center;
