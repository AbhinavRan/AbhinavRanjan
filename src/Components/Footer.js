import React, { Component } from 'react';

class Footer extends Component {
  render() {

    
    return (
      <footer>

     <div className="row">
        <div className="twelve columns">
           
            <ul className="social-links">
               
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

           <ul className="copyright">
              <li>&copy; Copyright 2020 Abhinav Ranjan</li>
              <li>Designed by <a title="Abhinav" href="https://www.linkedin.com/in/abhinav-ranjan-242a5b116/">Abhinav</a></li>
           </ul>

        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
     </div>
  </footer>
    );
  }
}

export default Footer;
