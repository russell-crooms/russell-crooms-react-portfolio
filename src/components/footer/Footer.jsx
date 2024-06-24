import './Footer.css';
import russell_logo from '../../assets/russell-logo-final.png';

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={russell_logo} alt="" />
                <p>I am a Frontend Developer from USA with 10 years of experience in
                companies like Microsoft, Tesla an Apple.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer