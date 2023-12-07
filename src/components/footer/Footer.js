/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-target-blank */

function Footer() {
    return ( 
        <>
             <div className="footer">
              <div className="ffooter">
                <div className="main-box">
                  <div className="box-overlay"></div>
                  <div className="main-lyt">
                    <p>
                      Get our latest insights delivered straight to your inbox
                    </p>
                  </div>
                  <div className="main-ryt">
                    <input
                      type="text"
                      id="emailsubscribe"
                      placeholder="Enter Your Email"
                      defaultValue
                    />
                    <span>Subscribe Now</span>
                  </div>
                </div>
              </div>
              <div className="others">
                <div className="other-overlay">
                  <div className="footer-logo">
                    <a href="#">
                      <img
                        src="./images/logo.png"
                        alt="logo"
                        className="flogo"
                      />
                    </a>
                    <span className="slogan">
                      Transforming the way business is DONE
                    </span>
                  </div>
                </div>
              </div>
              <div className="mysocials">
                <div className="socials-left">
                  <p>Follow us on</p>
                  <div className="mysocials-icons">
                    <a
                      href="https://twitter.com/xcelszz?s=20&t=FuoXJyssVc76lgrJpMX32A"
                      target="_blank"
                    >
                      <img
                        src="./images/twitter.png"
                        alt="logo"
                        className="mysocial-icon"
                      />
                    </a>
                    <a
                      href="https://www.instagram.com/xcelsz/?igshid=YmMyMTA2M2Y%3D"
                      target="_blank"
                    >
                      <img
                        src="./images/instagram.png"
                        alt="logo"
                        className="mysocial-icon"
                      />
                    </a>
                    <a
                      href="https://web.facebook.com/xcelsz?_rdc=1&_rdr"
                      target="_blank"
                    >
                      <img
                        src="./images/facebook.png"
                        alt="logo"
                        className="mysocial-icon"
                      />
                    </a>
                    <a
                      href="https://uk.linkedin.com/company/xcelszdigitalsolutions"
                      target="_blank"
                    >
                      <img
                        src="./images/linkedin.png"
                        alt="logo"
                        className="mysocial-icon"
                      />
                    </a>
                  </div>
                </div>
                <div className="socials-right">
                  <div className="copyRight">
                    <img src="./images/image.png" alt="COPYRIGHT" />
                  </div>
                  <div className="years">2020 - 2023</div>
                  <div className="myUrl">
                    <a href="#">Xcelsz.com</a>
                  </div>
                </div>
              </div>
            </div>
        </>
     );
}

export default Footer;