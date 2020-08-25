import React, { Component } from 'react';

class Courses extends Component {
  render() {

    

    return (
      <section id="Courses">
      <div className="text-container">
         <div className="row">
          <div className="two columns header-col">
               <h5><span>Courses</span></h5>
            </div>
         <li>
            <blockquote>
               <p><h2>Cybrary:Cisco CCNA</h2></p>
               </blockquote>
               <a href="https://app.cybrary.it/courses/api/certificate/C-a0e1230922-8c7f89/view"><h4>Click to verify</h4>
          
        </a>
         </li>

            <div className="ten columns flex-container">
                  <ul className="slides">
                      
                  </ul>
               </div>
            </div>
         </div>
   </section>
    );
  }
}

export default Courses;
