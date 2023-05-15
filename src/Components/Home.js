import React from 'react';
import Navbar from './Navbar';
import ArrowRightIcon from "../images/icons/392525_arrow_right_icon.png";
import char1 from "../images/oh__img170.2.jpg";
import chair2 from "../images/oh__img170.3.jpg";
import ArrowLeftIcon from "../images/icons/392526_arrow_left_icon.png";
import ArrowRighIcon from "../images/icons/392525_arrow_right_icon.png";
import QuestionMarkIcon from "../images/icons/9042837_question_mark_circle_icon.png";
import FingerPrintIcon from "../images/icons/3669427_fingerprint_ic_icon.png";
import LoopIcon from "../images/icons/9044702_loop_icon.png";
import FlightIcon from "../images/icons/134188_plane_transportation_air_icon.png";
import Prod1 from "../images/ProductImage__014-1024x1024.jpg";
import Prod2 from "../images/ProductImage__041-1024x1024.jpg";
import Prod3 from "../images/ProductImage__054-1024x1024.jpg";
import Prod4 from "../images/ProductImage__055-1024x1024.jpg";






const Home = () => {
  return (
    <div className="whole_cont">
    <Navbar />
        <div className="page">
            <div className="maint">
                <div className="text1">
                    <span>#SA20 – 22</span>
                    <p>Sweet home Collection.</p>
                </div>
                <a href="#" class="go_s">Go Shopping <img src={ArrowRightIcon} alt="" /></a>
                <div className="block">
                    <div className="s1">
                        <p>Rotterdam</p>
                        <label for="">Graaf Florisstraat 22A, 3021 CH, Netherlands</label>
                    </div>
                    <div className="s2">
                        <p>Barcelona</p>
                        <label for="">365 Gran Via de Corts, Catalanes, BA 08015</label>
                    </div>
                </div>
            </div>
            <div className="slideshow-container">
                <div className="pic">
                    <div className="mySlides fade">
                        <img src={char1} alt="" />
                    </div>
                    {/* <div className="mySlides fade"> */}
                        {/* <img src={chair2} alt="" /> */}
                    {/* </div> */}
                    
                    <div className="arrows">
                        <img src={ArrowLeftIcon} alt="" height="15px" onclick="plusSlides(-1)" class="prev" />
                        <img src={ArrowRighIcon} alt="" class="next" onclick="plusSlides(1)" height="15px" />
                    </div>
                </div>
                <div className="dot_group">
                    <span className="dot" onclick="currentSlide(1)"></span> 
                    <span className="dot" onclick="currentSlide(2)"></span> 
                </div>
            </div>
        </div>

        <div className="support">
            <div className="cont">
                <div className="icon">
                    <img src={FlightIcon} alt="" />
                </div>
                <div className="words">
                    <p>Worldwide Shipping</p>
                    <span>Free shipping over $65.</span>
                </div>
            </div>
            <div className="cont">
                <div className="icon">
                    <img src={LoopIcon} alt="" />
                </div>
                <div className="words">
                    <p>Free Returns</p>
                    <span>30-days return policy.</span>
                </div>
            </div>
            <div className="cont">
                <div className="icon">
                    <img src={FingerPrintIcon} alt="" />
                </div>
                <div className="words">
                    <p>Secured payments</p>
                    <span>Use major credit cards.</span>
                </div>
            </div>
            <div className="cont">
                <div className="icon">
                    <img src={QuestionMarkIcon} alt="" />
                </div>
                <div className="words">
                    <p>24/7 Support Service</p>
                    <span>Top notch customer care.</span>
                </div>
            </div>
        </div>

        <div className="dis1">
            <div className="container">
                <div className="ses">
                    <div className="img"><img src={Prod3} alt="" /></div>
                    <div className="texts">
                        <span  className="per">FW LIMITED EDITION </span>
                        <label for="">Kitchen utensils</label>
                        <a href="#"><span>Start shopping</span><img src={ArrowRightIcon} alt="" /></a>
                    </div>
                </div>
                <div className="ses">
                    <div className="img"><img src={Prod4} alt="" /></div>
                    <div className="texts">
                        <span className="per">up to 65% off</span>
                        <label for="">Home decoration</label>
                        <a href="#"><span>Start shopping</span><img src={ArrowRightIcon} alt="" /></a>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="ses">
                    <div className="img"><img src={Prod3} alt="" /></div>
                    <div className="texts">
                        <span  className="per">FW LIMITED EDITION </span>
                        <label for="">Kitchen utensils</label>
                        <a href="#"><span>Start shopping</span><img src={ArrowRightIcon} alt="" /></a>
                    </div>
                </div>
                <div className="ses">
                    <div className="img"><img src={Prod4} alt="" /></div>
                    <div className="texts">
                        <span className="per">up to 65% off</span>
                        <label for="">Home decoration</label>
                        <a href="#"><span>Start shopping</span><img src={ArrowRightIcon} alt="" /></a>
                    </div>
                </div>
            </div>
         </div>

    </div>
  );
};

export default Home