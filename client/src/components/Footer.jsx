import React from 'react'
import footerlogo from '../assets/techcreek logo.png'


const Footer = () => {
    return (
        <div className="footer">
            
            <nav className="navbar navbar-light bg-light d-nav">
      <div className="container-fluid d-containerF">
          <a className="navbar-brand d-footer " href="index.html">
              <img src={footerlogo} alt="" width="70" height="60"
                  className="d-inline-block align-text-top f-image" />
          </a>
      </div>
      <p className="h6">Copyright 2021 SMARTVOTE, All Right Reserved <br />
        <span>Privacy Policy  | Terms Of Use</span> </p>
  </nav>

        </div>
    )
}

export default Footer
