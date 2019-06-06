import React from 'react';
import './OuterFooter.css';


const Footer = () =>{
    return(
      <div className="social-container">
        <div>
          <p style={{textAlign:'center'}}>
                   &copy; Coded By Anit Kumar <span role="img" aria-label="happy mode">😄</span>
                </p>
        </div>
        <ul className="social-icons">
            <li><a href="https://github.com/anitkumarsingh" target="_blank" 
                   rel="noopener noreferrer"><i className="fa fa-github"></i>
                </a>
            </li>
            <li><a href="https://www.freecodecamp.org/anitkumar" target="_blank" 
                   rel="noopener noreferrer"><i className="fa fa-google"></i>
                 </a>
            </li>
            <li><a href="https://www.linkedin.com/in/anit-kumar" target="_blank" 
                   rel="noopener noreferrer"><i className="fa fa-linkedin"></i>
                  </a>
              </li>
            <li><a href="https://github.com/anitkumarsingh" target="_blank" 
                   rel="noopener noreferrer"><i className="fa fa-codepen"></i>
                </a>
            </li>
        </ul>
      </div>
    );
}
export default Footer;