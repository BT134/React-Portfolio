import React from 'react';
import myImage from '../../assets/images/profile-picture.jpg';

function About() {

    return(
        <section className="container">
            <h2 class="top-title">Brenton Turnor</h2>
            <hr></hr>
            <div>
                <img class="mb-5" id="avatar" src={myImage} alt="Brenton Turnor" />

                <p>
                    I'm a Full-Stack Developer located in Perth, Western Australia. New to the industry with plenty of energy and attention to detail. 
                    Recently completed a Certificate in Full Stack Web Development Coding Bootcamp at UWA. 
                    Web design/development is something that has always interested me and I want to apply my years of experience in the retail sales industry into providing clients with a high level of service and focus on their requirements.
                </p>
                <p>
                    I previously worked in retail sales and sales management, where I was able to learn alot of useful skills. 
                    These included, negotiating, leadership, time managment, systems management and people managment to name a few. 
                    I'm currently working as a Sales Manager at a building technology company, Intelligent Home. 
                    This role has given me more of a techincial sales abilty. Where I design, sell and implement systems into peoples homes and this has given me the opportunity to work on small and large scale projects.
                </p>
                <p>
                    Well-organised person, problem solver, independent emloyee with high attention to detail. 
                    Fan of Australian Rules Football, Gaming, Snowboarding and Watching Movies. 
                    I'm a family man and a father to a beatiful girl, Zoe.
                </p>
            </div>
        </section>
    )
}

export default About;