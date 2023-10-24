import React from 'react';

const ProjList = () => {
  return (
    <div className="project-container">
      <div className="repository-container">
        <div className="repository-head">
          <a href="dice/index.html" target="_blank">
            <h3>2 Player Dice Game</h3>
          </a>
          <a href="dice/index.html" target="_blank">
            <img width="16" height="16" src="./asset/svg/external-link.png" alt="external-link" />
          </a>
          <figure className="live-indicator__circle"></figure>
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
          <figure className="live-indicator__circle"></figure>
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

        <p className="repository-description">Encrypt your message with strong encryption using Mathematical eqs.</p>
        <div className="repository-language-used-container">
          <span className="language-used">Python(base64)</span>
          <span className="language-used">Python(ChaCha20)</span>
        </div>
      </div>
    </div>
  );
};

export default ProjList;
