import React from "react";

function Resume() {
  return (
    <section class="container">
      <h2 className="top-title">Resume</h2>
      <hr></hr>

      <div>
        <div class="mt-5">
          <h2 className="top-title">Brenton Turnor</h2>
          <ul>
            <li>
            Full Stack Web Developer who possesses technical skills within the MERN stack. 
            Always continuously learning new technology and applying what I have learnt.
            </li>
          </ul>


        </div>
      </div>

      <div class="justify-content-center mt-5">
        <div>
          <h2 className="top-title">Proficiencies</h2>
          <ul>
            <li>
            HTML, CSS, JavaScript, jQuery, React.js, Frameworks (Bootstrap, Bulma, Materalize), IndexedDB,<br />
            Node.js, Express.js, MySQL, Sequelize, MongoDB, Mongoose, NoSQL, APIs, Templating (HandleBars),<br />
            Graphql, Response Web Design. 
            </li>
          </ul>
        </div>
      </div>

    <div>
      <p class="mt-5">
            <a href="https://www.linkedin.com/in/brenton-turnor-345831b2/">
              linkedin<img
                src="https://img.icons8.com/fluent/48/000000/linkedin.png"
                alt="inkedIn"
              />
            </a>
          </p>

          <a
            href="https://github.com/BT134/React-Portfolio/raw/main/docs/Brenton-Turnor-Resume.pdf"
            class="link"
          >
            Download Resume
          </a>
    </div>
    
    </section>
  );
}

export default Resume;