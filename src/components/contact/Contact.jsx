import './Contact.css'; 
import mail_icon from '../../assets/mail_icon.svg';
import call_icon from '../../assets/call_icon.svg';
import location_icon from '../../assets/location_icon.svg';

const Contact = () => {
  return (
    <div id="contact" className="contact">
        <div className="contact-title">
            <h1>Contact Me</h1>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p> I'm currently available to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact me anytime.</p>
            <div className="contact-details">
                <div className="contact-detail">
                    <img src={mail_icon} alt="" />
                    <p>russella.crooms@gmail.com</p>
                </div>
                <div className="contact-detail">
                    <img src={call_icon} alt="" />
                    <p>214-771-2424</p>
                </div>
                <div className="contact-detail">
                    <img src={location_icon} alt="" />
                    <p>Dallas, Texas USA</p>
                </div>
            </div>
            </div>

        <form className="contact-right">
            <label htmlFor="name">Your Name</label>
            <input type="text" placeholder="Enter your name" name="name" />
            <label htmlFor="inputEmail">Your Email</label>
            <input 
                type="email"
                placeholder="Enter Your Email Address"
                name="email"
            />
            <label htmlFor="message"> Write Your Message Here</label>
            <textarea 
                name="message"
                rows="8"
                placeholder="Enter your message"
            ></textarea>
            <button className="contact-submit" type="submit">Submit Now</button>
        </form>
    </div>
    </div>
  )
}

export default Contact