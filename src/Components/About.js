import React, { Component } from 'react';

class About extends Component {
  render() {

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
           <img className="profile-pic"  src="images/profilepic.jpg" alt="Abhinav Ranjan Profile-pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>Emerging Full Stack Web Developer, UI/UX designer. <br/> I like to create meaningful experinces through design, to play and discover the new aspects and possibility each and every day.
            </p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
               <span>Abhinav Ranjan</span><br />
               <span>Ranchi,
                     IN, 835219,
                   </span><br />
               <span><a href="tel:9142103209">9142103209</a></span><br />
                     <span><a href="mailto:abhinavranjan334@gmail.com">abhinavranjan334@gmail.com</a></span>
             </p>
               </div>
               
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
