import React, { Component } from 'react';

class Header extends Component {
  render() {

    

    return (
      <header id="home">

      
      <svg x="0" y="0"  viewBox="0 0 2560 100" preserveAspectRatio="none">
    <polygon fill="white" points="2560,0 2560,100 0,100"/>
  </svg>

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
            <li><a className="smoothscroll" href="#Courses">Courses</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>


      </nav>



      <div className="row banner">
         <div className="banner-text">

            <h4 className="responsive-headline">Hello, I'm</h4><h1> ABHINAV RANJAN.
            <img src="images/dev.webp" class="img-fluid" alt="Image description."></img>
                  </h1>
            <h3>I'm focused on creating meaningful experinces through design, currently working on being full stack web developer where I can apply, develop and consolidate my skills.
            </h3>
            <hr />

            <ul className="social">
               
               {
         <li key=""><a href="https://www.linkedin.com/in/abhinav-ranjan-242a5b116/"><i className="fa fa-linkedin"></i></a></li>
      }
               
                {
         <li key="instagram"><a href="https://github.com/AbhinavRan"><i className="fa fa-github"></i></a></li>
      }
                 {
         <li key="facebook"><a href="https://join.skype.com/invite/WFSM0Eg5jprf"><i className="fa fa-skype"></i></a></li>
      }
                  {
         <li key="facebook"><a href="https://www.facebook.com/abhinav.ranjan.16/"><i className="fa fa-facebook"></i></a></li>
      }
                  {
         <li key="linkedin"><a href="https://www.instagram.com/__a_b_h_i_n_a_v___/"><i className="fa fa-instagram"></i></a></li>
      }
            </ul>

            <div className="columns download">
                  <p>
                     <a className="button" href="CV/ABHINAV RANJAN.pdf"><i className="fa fa-download"></i>Download Resume </a>
                      </p>
              </div>


         </div>
      </div>

     

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle" ></i></a>
      </p>

      

   </header>
    );
  }
}

export default Header;
