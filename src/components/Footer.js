import Logo from "../images/logo.svg"
import GP from "../images/google-play.svg";
import AP from "../images/app-store.svg";
function Footer(){
    return<div className="container footer">
        <div className="row">
            <div className="col-lg-2">
                <a href="#"> <img src={Logo} className="flogo"/></a>
                <p className="fp">Eduport education theme, built specifically for the education centers which is dedicated to teaching and involve learners.</p>
                <button><i class="bi bi-facebook"></i></button> <button><i class="bi bi-instagram"></i></button> <button><i class="bi bi-twitter"></i></button> <button><i class="bi bi-linkedin"></i></button>
            </div>
            <div className="col-lg-2 col2">
                <h1>Company</h1>
                <a href="#">About Us</a>
                <br/>
                <a href="#">Contact Us</a>
                <br/>
                <a href="#">News and Blogs</a>
                <br/>
                <a href="#">Library</a>
                <br/>
                <a href="#">Career</a>
     
            </div>
            <div className="col-lg-2 col2 col3">
                <h1>Community</h1>
                <a href="#">Documentation</a>
                <br/>
                <a href="#">Faq</a>
                <br/>
                <a href="#">Forum</a>
                <br/>
                <a href="#">Sitemap</a>
     
            </div>
            <div className="col-lg-2 col2 col3">
                <h1>Teaching</h1>
                <a href="#">Become a teacher</a>
                <br/>
                <a href="#">How to guide</a>
                <br/>
                <a href="#">Terms & Conditions</a>
              
            </div>
            <div className="col-lg-2 col2 col3">
                <h1>Contact</h1>
                <a href="#">Toll free: +1234 568 963 (9:AM to 8:PM IST)</a>
                <br/>
                <a href="#">Email: example@gmail.com</a>
                <a href="#" className="gpimg"> <img src={GP}/> </a>
                <a href="#" className="apimg"> <img src={AP}/></a>
                
     
            </div>
        </div>
        <hr/>
        <div className="cpy">
            <p>Copyrights ©2022 Eduport. All rights reserved.</p>
            <div className="langu">
                    <a href="#"> <i class="bi bi-globe"></i> Language <i class="bi bi-chevron-up"></i> </a>
                    <a href="#"> Terms of Use</a>
                    <a href="#"> Privacy Policy</a>
        </div>
        </div>
        

    </div>
}
export default Footer;