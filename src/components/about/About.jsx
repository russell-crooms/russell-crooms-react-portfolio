import './About.css';
import russell_arcade_photo from '../../assets/russell-arcade-photo.jpg';

const About = () => {
  return (
    <div className="about-section-container" id="about">
        <div className="about-header">
            <h1>About Me</h1>
        </div>
        <div className="about-section">
            <div className="about-section-left">
                <img src={russell_arcade_photo} alt="Russell Crooms" />
            </div>
            <div className="about-section-right">
                <div className="about-paragraphs">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius delectus vero consequatur minus facere ducimus, expedita molestiae non accusamus voluptatibus incidunt maiores atque vitae quia similique alias reprehenderit velit obcaecati.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam praesentium ipsa commodi quidem numquam exercitationem excepturi, perferendis dolores voluptatibus fugit odio obcaecati nulla beatae, aspernatur debitis. Eum adipisci illo facilis.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About