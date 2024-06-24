import './Footer.css';
import russell_logo from '../../assets/russell-logo-final.png';
import user_icon from '../../assets/user_icon.svg';

const Footer = () => {
  return (
    <div className="footer">
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left"> @ 2024 Russell Crooms. All rights reserved</p>
                <div className="footer-bottom-right">
                    <p>Terms of Service</p>
                    <p>Privacy Policy</p>
                    <p>Connect With Me</p>
                </div>
            </div>
        </div>
  );
};

export default Footer;