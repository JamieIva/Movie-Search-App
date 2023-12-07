/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-target-blank */


import slider_img from "../../assets/images/slider.png";
import feedback_img from "../../assets/images/feedback.png";
import adduse_img from "../../assets/images/AddUser-cuate.png";
import close_img from "../../assets/images/x-regular-24.png";



import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import {useState, useEffect} from 'react'




function HomePage() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  
    return ( 
        <>
          {modal && (
            <div className="feedback-overlay">
              <div className="feedback-container">
                <div className="closeBtn" onClick={toggleModal}>
                  <a href="#" onClick={toggleModal}>
                    <img src={close_img} alt="X" />
                  </a>
                </div>
                <div className="feedback-left">
                  <div className="right-caption">
                    <p>Grow and Advance With Our Innovative Solutions</p>
                    <span />
                  </div>
                  <div className="right-img">
                    <img src={adduse_img} alt="IMAGE" />
                  </div>
                </div>
                <div className="feedback-right">
                  <div className="captions">
                    <h4>Complete the form below to join the waiting list</h4>
                    <p>Fill all fields to continue</p>
                    <p id="loader" />
                  </div>
                  <div className="feedback-form">
                    <div className="form-row">
                      <select name="person" id="person">
                        <option value>I am </option>
                        <option value="Business">Business</option>
                        <option value="Private Individual">Individual</option>
                      </select>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter Name"
                        
                      />
                    </div>
                    <div className="form-row">
                      <select name="person" id="solutionType">
                        <option value>Select waiting list </option>
                        <option value="Oish">Oish</option>
                        <option value="UYATMR">UYATMR</option>
                        <option value="iPartner">iPartner</option>
                        <option value="iMarketer">iMarketer</option>
                        <option value="iPPM">iPPM</option>
                        {/*<option value="iXcelsz">iXcelsz</option>
                        <option value="Local Stayz">Local Stayz</option>
                        <option value="iProperty Project Manager">
                          iProperty Project Manager
                        </option>
                        <option value="GyeFie">GyeFie</option>
                        <option value="TPV">TPV</option>*/}
                      </select>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter Email"
                      />
                    </div>
                    <div className="form-row">
                      <select name="person" id="country" placeholder="I am">
                        <option value>Select Country</option>
                        <option value="Afghanistan">Afghanistan</option>
                        <option value="Åland Islands">Åland Islands</option>
                        <option value="Albania">Albania</option>
                        <option value="Algeria">Algeria</option>
                        <option value="American Samoa">American Samoa</option>
                        <option value="AndorrA">AndorrA</option>
                        <option value="Angola">Angola</option>
                        <option value="Anguilla">Anguilla</option>
                        <option value="Antarctica">Antarctica</option>
                        <option value="Antigua and Barbuda">
                          Antigua and Barbuda
                        </option>
                        <option value="Argentina">Argentina</option>
                        <option value="Armenia">Armenia</option>
                        <option value="Aruba">Aruba</option>
                        <option value="Australia">Australia</option>
                        <option value="Austria">Austria</option>
                        <option value="Azerbaijan">Azerbaijan</option>
                        <option value="Bahamas">Bahamas</option>
                        <option value="Bahrain">Bahrain</option>
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="Barbados">Barbados</option>
                        <option value="Belarus">Belarus</option>
                        <option value="Belgium">Belgium</option>
                        <option value="Belize">Belize</option>
                        <option value="Benin">Benin</option>
                        <option value="Bermuda">Bermuda</option>
                        <option value="Bhutan">Bhutan</option>
                        <option value="Bolivia">Bolivia</option>
                        <option value="Bosnia and Herzegovina">
                          Bosnia and Herzegovina
                        </option>
                        <option value="Botswana">Botswana</option>
                        <option value="Bouvet Island">Bouvet Island</option>
                        <option value="Brazil">Brazil</option>
                        <option value="British Indian Ocean Territory">
                          British Indian Ocean Territory
                        </option>
                        <option value="Brunei Darussalam">
                          Brunei Darussalam
                        </option>
                        <option value="Bulgaria">Bulgaria</option>
                        <option value="Burkina Faso">Burkina Faso</option>
                        <option value="Burundi">Burundi</option>
                        <option value="Cambodia">Cambodia</option>
                        <option value="Cameroon">Cameroon</option>
                        <option value="Canada">Canada</option>
                        <option value="Cape Verde">Cape Verde</option>
                        <option value="Cayman Islands">Cayman Islands</option>
                        <option value="Central African Republic">
                          Central African Republic
                        </option>
                        <option value="Chad">Chad</option>
                        <option value="Chile">Chile</option>
                        <option value="China">China</option>
                        <option value="Christmas Island">
                          Christmas Island
                        </option>
                        <option value="Cocos (Keeling) Islands">
                          Cocos (Keeling) Islands
                        </option>
                        <option value="Colombia">Colombia</option>
                        <option value="Comoros">Comoros</option>
                        <option value="Congo">Congo</option>
                        <option value="Congo, The Democratic Republic of the">
                          Congo, The Democratic Republic of the
                        </option>
                        <option value="Cook Islands">Cook Islands</option>
                        <option value="Costa Rica">Costa Rica</option>
                        <option value="Croatia">Croatia</option>
                        <option value="Cuba">Cuba</option>
                        <option value="Cyprus">Cyprus</option>
                        <option value="Czech Republic">Czech Republic</option>
                        <option value="Denmark">Denmark</option>
                        <option value="Djibouti">Djibouti</option>
                        <option value="Dominica">Dominica</option>
                        <option value="Dominican Republic">
                          Dominican Republic
                        </option>
                        <option value="Ecuador">Ecuador</option>
                        <option value="Egypt">Egypt</option>
                        <option value="El Salvador">El Salvador</option>
                        <option value="Equatorial Guinea">
                          Equatorial Guinea
                        </option>
                        <option value="Eritrea">Eritrea</option>
                        <option value="Estonia">Estonia</option>
                        <option value="Ethiopia">Ethiopia</option>
                        <option value="Falkland Islands (Malvinas)">
                          Falkland Islands (Malvinas)
                        </option>
                        <option value="Faroe Islands">Faroe Islands</option>
                        <option value="Fiji">Fiji</option>
                        <option value="Finland">Finland</option>
                        <option value="France">France</option>
                        <option value="French Guiana">French Guiana</option>
                        <option value="French Polynesia">
                          French Polynesia
                        </option>
                        <option value="French Southern Territories">
                          French Southern Territories
                        </option>
                        <option value="Gabon">Gabon</option>
                        <option value="Gambia">Gambia</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Germany">Germany</option>
                        <option value="Ghana">Ghana</option>
                        <option value="Gibraltar">Gibraltar</option>
                        <option value="Greece">Greece</option>
                        <option value="Greenland">Greenland</option>
                        <option value="Grenada">Grenada</option>
                        <option value="Guadeloupe">Guadeloupe</option>
                        <option value="Guam">Guam</option>
                        <option value="Guatemala">Guatemala</option>
                        <option value="Guernsey">Guernsey</option>
                        <option value="Guinea">Guinea</option>
                        <option value="Guinea-Bissau">Guinea-Bissau</option>
                        <option value="Guyana">Guyana</option>
                        <option value="Haiti">Haiti</option>
                        <option value="Heard Island and Mcdonald Islands">
                          Heard Island and Mcdonald Islands
                        </option>
                        <option value="Holy See (Vatican City State)">
                          Holy See (Vatican City State)
                        </option>
                        <option value="Honduras">Honduras</option>
                        <option value="Hong Kong">Hong Kong</option>
                        <option value="Hungary">Hungary</option>
                        <option value="Iceland">Iceland</option>
                        <option value="India">India</option>
                        <option value="Indonesia">Indonesia</option>
                        <option value="Iran, Islamic Republic Of">
                          Iran, Islamic Republic Of
                        </option>
                        <option value="Iraq">Iraq</option>
                        <option value="Ireland">Ireland</option>
                        <option value="Isle of Man">Isle of Man</option>
                        <option value="Israel">Israel</option>
                        <option value="Italy">Italy</option>
                        <option value="Jamaica">Jamaica</option>
                        <option value="Japan">Japan</option>
                        <option value="Jersey">Jersey</option>
                        <option value="Jordan">Jordan</option>
                        <option value="Kazakhstan">Kazakhstan</option>
                        <option value="Kenya">Kenya</option>
                        <option value="Kiribati">Kiribati</option>

                        <option value="Korea, Republic of">
                          Korea, Republic of
                        </option>
                        <option value="Kuwait">Kuwait</option>
                        <option value="Kyrgyzstan">Kyrgyzstan</option>

                        <option value="Latvia">Latvia</option>
                        <option value="Lebanon">Lebanon</option>
                        <option value="Lesotho">Lesotho</option>
                        <option value="Liberia">Liberia</option>
                        <option value="Libyan Arab Jamahiriya">
                          Libyan Arab Jamahiriya
                        </option>
                        <option value="Liechtenstein">Liechtenstein</option>
                        <option value="Lithuania">Lithuania</option>
                        <option value="Luxembourg">Luxembourg</option>
                        <option value="Macao">Macao</option>
                        <option value="Macedonia, The Former Yugoslav Republic of">
                          Macedonia, The Former Yugoslav Republic of
                        </option>
                        <option value="Madagascar">Madagascar</option>
                        <option value="Malawi">Malawi</option>
                        <option value="Malaysia">Malaysia</option>
                        <option value="Maldives">Maldives</option>
                        <option value="Mali">Mali</option>
                        <option value="Malta">Malta</option>
                        <option value="Marshall Islands">
                          Marshall Islands
                        </option>
                        <option value="Martinique">Martinique</option>
                        <option value="Mauritania">Mauritania</option>
                        <option value="Mauritius">Mauritius</option>
                        <option value="Mayotte">Mayotte</option>
                        <option value="Mexico">Mexico</option>
                        <option value="Micronesia, Federated States of">
                          Micronesia, Federated States of
                        </option>
                        <option value="Moldova, Republic of">
                          Moldova, Republic of
                        </option>
                        <option value="Monaco">Monaco</option>
                        <option value="Mongolia">Mongolia</option>
                        <option value="Montserrat">Montserrat</option>
                        <option value="Morocco">Morocco</option>
                        <option value="Mozambique">Mozambique</option>
                        <option value="Myanmar">Myanmar</option>
                        <option value="Namibia">Namibia</option>
                        <option value="Nauru">Nauru</option>
                        <option value="Nepal">Nepal</option>
                        <option value="Netherlands">Netherlands</option>
                        <option value="Netherlands Antilles">
                          Netherlands Antilles
                        </option>
                        <option value="New Caledonia">New Caledonia</option>
                        <option value="New Zealand">New Zealand</option>
                        <option value="Nicaragua">Nicaragua</option>
                        <option value="Niger">Niger</option>
                        <option value="Nigeria">Nigeria</option>
                        <option value="Niue">Niue</option>
                        <option value="Norfolk Island">Norfolk Island</option>
                        <option value="Northern Mariana Islands">
                          Northern Mariana Islands
                        </option>
                        <option value="Norway">Norway</option>
                        <option value="Oman">Oman</option>
                        <option value="Pakistan">Pakistan</option>
                        <option value="Palau">Palau</option>
                        <option value="Palestinian Territory, Occupied">
                          Palestinian Territory, Occupied
                        </option>
                        <option value="Panama">Panama</option>
                        <option value="Papua New Guinea">
                          Papua New Guinea
                        </option>
                        <option value="Paraguay">Paraguay</option>
                        <option value="Peru">Peru</option>
                        <option value="Philippines">Philippines</option>
                        <option value="Pitcairn">Pitcairn</option>
                        <option value="Poland">Poland</option>
                        <option value="Portugal">Portugal</option>
                        <option value="Puerto Rico">Puerto Rico</option>
                        <option value="Qatar">Qatar</option>
                        <option value="Reunion">Reunion</option>
                        <option value="Romania">Romania</option>
                        <option value="Russian Federation">
                          Russian Federation
                        </option>
                        <option value="RWANDA">RWANDA</option>
                        <option value="Saint Helena">Saint Helena</option>
                        <option value="Saint Kitts and Nevis">
                          Saint Kitts and Nevis
                        </option>
                        <option value="Saint Lucia">Saint Lucia</option>
                        <option value="Saint Pierre and Miquelon">
                          Saint Pierre and Miquelon
                        </option>
                        <option value="Saint Vincent and the Grenadines">
                          Saint Vincent and the Grenadines
                        </option>
                        <option value="Samoa">Samoa</option>
                        <option value="San Marino">San Marino</option>
                        <option value="Sao Tome and Principe">
                          Sao Tome and Principe
                        </option>
                        <option value="Saudi Arabia">Saudi Arabia</option>
                        <option value="Senegal">Senegal</option>
                        <option value="Serbia and Montenegro">
                          Serbia and Montenegro
                        </option>
                        <option value="Seychelles">Seychelles</option>
                        <option value="Sierra Leone">Sierra Leone</option>
                        <option value="Singapore">Singapore</option>
                        <option value="Slovakia">Slovakia</option>
                        <option value="Slovenia">Slovenia</option>
                        <option value="Solomon Islands">Solomon Islands</option>
                        <option value="Somalia">Somalia</option>
                        <option value="South Africa">South Africa</option>
                        <option value="South Georgia and the South Sandwich Islands">
                          South Georgia and the South Sandwich Islands
                        </option>
                        <option value="Spain">Spain</option>
                        <option value="Sri Lanka">Sri Lanka</option>
                        <option value="Sudan">Sudan</option>
                        <option value="Suriname">Suriname</option>
                        <option value="Svalbard and Jan Mayen">
                          Svalbard and Jan Mayen
                        </option>
                        <option value="Swaziland">Swaziland</option>
                        <option value="Sweden">Sweden</option>
                        <option value="Switzerland">Switzerland</option>
                        <option value="Syrian Arab Republic">
                          Syrian Arab Republic
                        </option>
                        <option value="Taiwan, Province of China">
                          Taiwan, Province of China
                        </option>
                        <option value="Tajikistan">Tajikistan</option>
                        <option value="Tanzania, United Republic of">
                          Tanzania, United Republic of
                        </option>
                        <option value="Thailand">Thailand</option>
                        <option value="Timor-Leste">Timor-Leste</option>
                        <option value="Togo">Togo</option>
                        <option value="Tokelau">Tokelau</option>
                        <option value="Tonga">Tonga</option>
                        <option value="Trinidad and Tobago">
                          Trinidad and Tobago
                        </option>
                        <option value="Tunisia">Tunisia</option>
                        <option value="Turkey">Turkey</option>
                        <option value="Turkmenistan">Turkmenistan</option>
                        <option value="Turks and Caicos Islands">
                          Turks and Caicos Islands
                        </option>
                        <option value="Tuvalu">Tuvalu</option>
                        <option value="Uganda">Uganda</option>
                        <option value="Ukraine">Ukraine</option>
                        <option value="United Arab Emirates">
                          United Arab Emirates
                        </option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="United States">United States</option>
                        <option value="United States Minor Outlying Islands">
                          United States Minor Outlying Islands
                        </option>
                        <option value="Uruguay">Uruguay</option>
                        <option value="Uzbekistan">Uzbekistan</option>
                        <option value="Vanuatu">Vanuatu</option>
                        <option value="Venezuela">Venezuela</option>
                        <option value="Viet Nam">Viet Nam</option>
                        <option value="Virgin Islands, British">
                          Virgin Islands, British
                        </option>
                        <option value="Virgin Islands, U.S.">
                          Virgin Islands, U.S.
                        </option>
                        <option value="Wallis and Futuna">
                          Wallis and Futuna
                        </option>
                        <option value="Western Sahara">Western Sahara</option>
                        <option value="Yemen">Yemen</option>
                        <option value="Zambia">Zambia</option>
                        <option value="Zimbabwe">Zimbabwe</option>
                      </select>
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        placeholder="Enter Telephone Number"
                      />
                    </div>
                  </div>
                  <div className="form-btn" onClick={toggleModal}>
                    <a href="#">Join Waiting List Now</a>
                  </div>
                </div>
              </div>
            </div>
          )}

            <div className="kontainer hide">
              <div className="mybox">
                <div className="closeBtn" onClick={toggleModal}>
                  <a href="#">
                    <img src={close_img} alt="X" />
                  </a>
                </div>
                <div className="box-right">
                  <img src="./images/AddUser-cuate.png" alt="IMAGE" />
                </div>
                <div className="box-left">
                  <h4 />
                  <span />
                </div>
              </div>
            </div>
            

            <div className="discovermain hide">
              <div className="discover">
                <div className="head">
                  Discover what is included in each Solution
                </div>
                <div className="contents">
                  <div className="row-col">
                    <div className="badge">
                      <div className="label">Oish</div>
                      <div className="expand">+</div>
                    </div>
                    <div className="hid closeHid">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Repudiandae necessitatibus veniam distinctio. Dignissimos
                      vero excepturi fuga nam tempore.
                    </div>
                  </div>
                  <div className="row-col">
                    <div className="badge">
                      <div className="label">UYATMR</div>
                      <div className="expand">+</div>
                    </div>
                    <div className="hid closeHid">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Repudiandae necessitatibus veniam distinctio. Dignissimos
                      vero excepturi fuga nam tempore.
                    </div>
                  </div>
                  <div className="row-col">
                    <div className="badge">
                      <div className="label">Local Stayz</div>
                      <div className="expand">+</div>
                    </div>
                    <div className="hid closeHid">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Repudiandae necessitatibus veniam distinctio. Dignissimos
                      vero excepturi fuga nam tempore.
                    </div>
                  </div>
                  <div className="row-col">
                    <div className="badge">
                      <div className="label">iPropertyPartner (iPP)</div>
                      <div className="expand">+</div>
                    </div>
                    <div className="hid closeHid">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Repudiandae necessitatibus veniam distinctio. Dignissimos
                      vero excepturi fuga nam tempore.
                    </div>
                  </div>
                  <div className="row-col">
                    <div className="badge">
                      <div className="label">
                        iPropertyProjectManager (iPPM)
                      </div>
                      <div className="expand">+</div>
                    </div>
                    <div className="hid closeHid">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Repudiandae necessitatibus veniam distinctio. Dignissimos
                      vero excepturi fuga nam tempore.
                    </div>
                  </div>
                  <div className="row-col">
                    <div className="badge">
                      <div className="label">The Property Vendee (TPV)</div>
                      <div className="expand">+</div>
                    </div>
                    <div className="hid closeHid">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Repudiandae necessitatibus veniam distinctio. Dignissimos
                      vero excepturi fuga nam tempore.
                    </div>
                  </div>
                  <div className="row-col">
                    <div className="badge">
                      <div className="label">GyeFie</div>
                      <div className="expand">+</div>
                    </div>
                    <div className="hid closeHid">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Repudiandae necessitatibus veniam distinctio. Dignissimos
                      vero excepturi fuga nam tempore.
                    </div>
                  </div>
                  <div className="row-col">
                    <div className="badge">
                      <div className="label">iMarketer</div>
                      <div className="expand">+</div>
                    </div>
                    <div className="hid closeHid">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Repudiandae necessitatibus veniam distinctio. Dignissimos
                      vero excepturi fuga nam tempore.
                    </div>
                  </div>
                  <div className="row-col">
                    <div className="badge">
                      <div className="label">iPartner</div>
                      <div className="expand">+</div>
                    </div>
                    <div className="hid closeHid">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Repudiandae necessitatibus veniam distinctio. Dignissimos
                      vero excepturi fuga nam tempore.
                    </div>
                  </div>
                  <div className="row-col">
                    <div className="badge">
                      <div className="label">iXcelsz</div>
                      <div className="expand">+</div>
                    </div>
                    <div className="hid closeHid">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Repudiandae necessitatibus veniam distinctio. Dignissimos
                      vero excepturi fuga nam tempore.
                    </div>
                  </div>
                </div>
                <div className="Btn">Close</div>
              </div>
            </div>
            <div className="discovermain hide">
              <div className="discover">
                <div className="head">
                  Explore subscription type for each Solution
                </div>
                <div className="contents">
                  <div className="row-col">
                    <div className="badge">
                      <div className="label">Oish</div>
                      <div className="expand">+</div>
                    </div>
                    <div className="hid closeHid">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Repudiandae necessitatibus veniam distinctio. Dignissimos
                      vero excepturi fuga nam tempore.
                    </div>
                  </div>
                  <div className="row-col">
                    <div className="badge">
                      <div className="label">UYATMR</div>
                      <div className="expand">+</div>
                    </div>
                    <div className="hid closeHid">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Repudiandae necessitatibus veniam distinctio. Dignissimos
                      vero excepturi fuga nam tempore.
                    </div>
                  </div>
                  <div className="row-col">
                    <div className="badge">
                      <div className="label">Local Stayz</div>
                      <div className="expand">+</div>
                    </div>
                    <div className="hid closeHid">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Repudiandae necessitatibus veniam distinctio. Dignissimos
                      vero excepturi fuga nam tempore.
                    </div>
                  </div>
                  <div className="row-col">
                    <div className="badge">
                      <div className="label">iPropertyPartner (iPP)</div>
                      <div className="expand">+</div>
                    </div>
                    <div className="hid closeHid">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Repudiandae necessitatibus veniam distinctio. Dignissimos
                      vero excepturi fuga nam tempore.
                    </div>
                  </div>
                  <div className="row-col">
                    <div className="badge">
                      <div className="label">
                        iPropertyProjectManager (iPPM)
                      </div>
                      <div className="expand">+</div>
                    </div>
                    <div className="hid closeHid">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Repudiandae necessitatibus veniam distinctio. Dignissimos
                      vero excepturi fuga nam tempore.
                    </div>
                  </div>
                  <div className="row-col">
                    <div className="badge">
                      <div className="label">The Property Vendee (TPV)</div>
                      <div className="expand">+</div>
                    </div>
                    <div className="hid closeHid">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Repudiandae necessitatibus veniam distinctio. Dignissimos
                      vero excepturi fuga nam tempore.
                    </div>
                  </div>
                  <div className="row-col">
                    <div className="badge">
                      <div className="label">GyeFie</div>
                      <div className="expand">+</div>
                    </div>
                    <div className="hid closeHid">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Repudiandae necessitatibus veniam distinctio. Dignissimos
                      vero excepturi fuga nam tempore.
                    </div>
                  </div>
                  <div className="row-col">
                    <div className="badge">
                      <div className="label">iMarketer</div>
                      <div className="expand">+</div>
                    </div>
                    <div className="hid closeHid">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Repudiandae necessitatibus veniam distinctio. Dignissimos
                      vero excepturi fuga nam tempore.
                    </div>
                  </div>
                  <div className="row-col">
                    <div className="badge">
                      <div className="label">iPartner</div>
                      <div className="expand">+</div>
                    </div>
                    <div className="hid closeHid">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Repudiandae necessitatibus veniam distinctio. Dignissimos
                      vero excepturi fuga nam tempore.
                    </div>
                  </div>
                  <div className="row-col">
                    <div className="badge">
                      <div className="label">iXcelsz</div>
                      <div className="expand">+</div>
                    </div>
                    <div className="hid closeHid">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Repudiandae necessitatibus veniam distinctio. Dignissimos
                      vero excepturi fuga nam tempore.
                    </div>
                  </div>
                </div>
                <div className="Btn">Close</div>
              </div>
            </div>
            <div className="myAppcontainer">
              <div className="box1" />
              <div className="box2" />
              <div className="box3" />
              <div className="box4" />
              <div className="box5" />
              <div className="box6" />
              <Navbar/>
              <div className="mybread">
                <img src={feedback_img} alt="Feedback" />
                <a
                  href="mailto:info@xcelsz.com&subject=Send%20us%20your%20feedback"
                  className="details"
                >
                  Lets hear from you
                </a>
              </div>
              <div className="myrow">
                <div className="col-left">
                  <div className="myhero">
                    Transforming the way business is <span>DONE!</span>
                  </div>
                  <div className="ordinary">
                    We accelerate personal, professional and business growth and
                    advancement worldwide.
                  </div>
                  <div className="mybuttons">
                    <a
                      href="mailto:info@xcelsz.com&subject=Discovery%20why%20xcelsz%20with%20solutions"
                      target="_blank"
                    >
                      Discover why xcelsz solutions
                    </a>
                    <a
                      href="mailto:info@xcelsz.com&subject=Get%20Started%20with%20Xcelsz"
                      target="_blank"
                    >
                      Get Started with xcelsz solutions
                    </a>
                  </div>
                </div>
                <div className="col-right">
                  <img src={slider_img} alt="slider" />
                </div>
                
              </div>
            </div>

            <div className="digital-section">
              <div className="layover">
                <div className="mywrapper">
                  <div className="wrapper-left">
                    <div className="firstElem">Featured</div>
                    <div className="parentElem">
                      <div className="childf">
                        Grow with our Digital Solutions
                      </div>
                      {/* <span href="#">Join Oish Waiting List</span> */}
                    </div>
                  </div>
                  {/* <div className="countme">
                    <div className="countme-left">Coming Soon</div>
                    <div className="countme-right">
                      <div className="countdown-col">
                        <h3>Days</h3>
                        <span id="oishDay">-1</span>
                      </div>
                      <div className="countdown-col">
                        <h3>Hrs</h3>
                        <span id="oishHr">-19</span>
                      </div>
                      <div className="countdown-col">
                        <h3>Min</h3>
                        <span id="oishMin">-50</span>
                      </div>
                      <div className="countdown-col">
                        <h3>Sec</h3>
                        <span id="oishSec">-33</span>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="main-section">
                {/* <div className="myheader">Grow with our Digital Solutions</div> */}
                <div className="childs">
                  <div className="card0">
                    <div className="caption">
                      <p>Learn from your peers with UYATMR</p>
                    </div>
                    <div className="mid">
                      <p>Coming Soon</p>
                      <div className="countdown-row">
                        <div className="countdown-col">
                          <h3>Days</h3>
                          <span id="yatmrDay">30</span>
                        </div>
                        <div className="countdown-col">
                          <h3>Hrs</h3>
                          <span id="yatmrHr">0</span>
                        </div>
                        <div className="countdown-col">
                          <h3>Min</h3>
                          <span id="yatmrMin">40</span>
                        </div>
                        <div className="countdown-col">
                          <h3>Sec</h3>
                          <span id="yatmrSec">27</span>
                        </div>
                      </div>
                    </div>
                    <div className="foot" onClick={toggleModal}>
                      <a href="#">
                        <span onClick={toggleModal}>Join UYATMR Mailing List</span>
                      </a>
                    </div>
                  </div>
                  <div className="card1">
                    <div className="caption">
                      <p>Leverage on your network with iMarketer</p>
                    </div>
                    <div className="mid">
                      <p>Coming Soon</p>
                      <div className="countdown-row">
                        <div className="countdown-col">
                          <h3>Days</h3>
                          <span id="imarkDay">90</span>
                        </div>
                        <div className="countdown-col">
                          <h3>Hrs</h3>
                          <span id="imarkHr">0</span>
                        </div>
                        <div className="countdown-col">
                          <h3>Min</h3>
                          <span id="imarkMin">40</span>
                        </div>
                        <div className="countdown-col">
                          <h3>Sec</h3>
                          <span id="imarkSec">27</span>
                        </div>
                      </div>
                    </div>
                    <div className="foot">
                      <a href="#">
                        <span onClick={toggleModal}>Join iMarketer Waiting List</span>
                      </a>
                    </div>
                  </div>
                  <div className="card0">
                    <div className="caption">
                      <p>Scale your business income with iPartner</p>
                    </div>
                    <div className="mid">
                      <p>Coming Soon</p>
                      <div className="countdown-row">
                        <div className="countdown-col">
                          <h3>Days</h3>
                          <span id="iptrDay">61</span>
                        </div>
                        <div className="countdown-col">
                          <h3>Hrs</h3>
                          <span id="iptrHr">0</span>
                        </div>
                        <div className="countdown-col">
                          <h3>Min</h3>
                          <span id="iptrMin">40</span>
                        </div>
                        <div className="countdown-col">
                          <h3>Sec</h3>
                          <span id="iptrSec">27</span>
                        </div>
                      </div>
                    </div>
                    <div className="foot">
                      <a href="#">
                        <span onClick={toggleModal}>Join iPartner Mailing List</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="third-section">
              <div className="inner-section">
                <div className="myleft">
                  <div className="text-col">
                    <p>Enjoy one of a kind</p>
                    <h3>simple, digital solutions </h3>
                    <p>that guarantee maximum value from anywhere in the world.</p>
                  </div>
                  <div className="loc">
                    <img
                      id="locationTop"
                      src="./images/location.png"
                      alt="Location Pin"
                      style={{ display: "none" }}
                    />
                  </div>
                  <div className="carou">
                    <a id="prev" className="prev">
                      <img src="./images/back.png" alt="PREV" />
                    </a>
                    <a id="next" className="next">
                      <img src="./images/back.png" alt="NEXT" />
                    </a>
                    <div className="mycontents" style={{ display: "flex" }}>
                      <p>5 businesses have subscribed from the UK</p>
                    </div>
                    <div className="mycontents" style={{ display: "none" }}>
                      <p>10 professionals subscribers in the UK</p>
                    </div>
                    <div className="mycontents" style={{ display: "none" }}>
                      <p>1 professional subscriber in Finland</p>
                    </div>
                    <div className="mycontents" style={{ display: "none" }}>
                      <p>3 professionals subscribers in the Netherlands</p>
                    </div>
                    <div className="mycontents" style={{ display: "none" }}>
                      <p>3 professionals subscribers in Germany</p>
                    </div>
                    <div className="mycontents" style={{ display: "none" }}>
                      <p>5 professionals subscribers in the US</p>
                    </div>
                    <div className="mycontents" style={{ display: "none" }}>
                      <p>15 Business subscribers in Ghana</p>
                    </div>
                    <div className="mycontents" style={{ display: "none" }}>
                      <p>3 Business subscribers in Nigeria</p>
                    </div>
                  </div>
                </div>
                <div className="myright">
                  <div className="points">
                    <div className="point1">
                      <img
                        id="point2"
                        src="./images/location.png"
                        alt="Pointer"
                        style={{ opacity: "0.5" }}
                      />
                    </div>
                    <div className="point2">
                      <img
                        id="point1"
                        src="./images/location.png"
                        alt="Pointer"
                        style={{ opacity: 1 }}
                      />
                    </div>
                    <div className="point4">
                      <img
                        id="point3"
                        src="./images/location.png"
                        alt="Pointer"
                        style={{ opacity: "0.5" }}
                      />
                    </div>
                  </div>
                  <img src="./images/world.png" alt="WORLD LOGO" />
                </div>
              </div>
              <div className="mycomponents">
                <div className="mycompo">
                  <div className="imgDiv">
                    <img src="./images/solution1.png" alt="IMAGE" />
                  </div>
                  <strong>300+</strong>
                  <span>Users</span>
                </div>
                <div className="mycompo">
                  <div className="imgDiv">
                    <img src="./images/solution3.png" alt="IMAGE" />
                  </div>
                  <strong>10+</strong>
                  <span>Solutions</span>
                </div>
                <div className="mycompo">
                  <div className="imgDiv">
                    <img src="./images/solution2.png" alt="IMAGE" />
                  </div>
                  <strong>11+</strong>
                  <span>Countries</span>
                </div>
              </div>
            </div>
            <div className="valueContainer">
              <div className="inner-section">
                <div className="value-left">
                  <div className="inner-col">
                    <div className="box">
                      <p>Industry</p>
                      <p>Tailored</p>
                      <p>Solutions</p>
                    </div>
                    <div className="box">
                      <p>Secure</p>
                      <p>Payment</p>
                      <p>Integration</p>
                    </div>
                  </div>
                  <div className="inner-col">
                    <div className="box">
                      <p>Your Go-To</p>
                      <p>One Stop</p>
                      <p>Platforms</p>
                    </div>
                    <div className="box">
                      <p>Reliable</p>
                      <p>24/7</p>
                      <p>Support</p>
                    </div>
                    <div className="box">
                      <p>Convenient</p>
                      <p>Business</p>
                      <p>Anywhere</p>
                    </div>
                  </div>
                </div>
                <div className="value-right">
                  <div className="fsection">The added Value to You</div>
                  <div className="ssection">
                    Save the Hassle, Time and Money with Xcelsz Solutions
                  </div>
                  <div className="tsection">
                    Explore a range of digital solutions uniquely designed
                    ultimately to help Individuals and businesses transact
                    business safely and easily from the comfort of their homes
                    to maximise and achieve desired growth for reasonable
                    prices.
                  </div>
                  <a
                    href="mailto:info@xcelsz.com&subject=Explore%20Solutions%20with%20Xcelsz"
                    className="btnsection"
                  >
                    Find Out More
                  </a>
                </div>
              </div>
            </div>
            <Footer/>
        </>
     );
}

export default HomePage;