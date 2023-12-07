/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-target-blank */
import logo_img from "../../assets/images/logo.png";

function Navbar() {
    return ( 
        <>
             <div className="Navbar">
                <a href="/">
                  <img src={logo_img} alt="logo" />
                  <span>Xcelsz</span>
                </a>
                <div className="links">
                  <a
                    href="mailto:info@xcelsz.com&subject=Explore%20Solutions%20with%20Xcelsz"
                    target="_blank"
                  >
                    Explore Solutions
                  </a>
                </div>
              </div>
        </>
     );
}

export default Navbar;