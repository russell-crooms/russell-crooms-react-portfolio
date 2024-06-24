import "./Portfolio.css";
import arrow_icon from "../../assets/arrow_icon.svg"
import portfolio_data from "../../assets/portfolio_data";

const Portfolio = () => {
  return (
    <div id="work" className="mywork">
        <div className="mywork-title">
            <h1>My Latest Work</h1>
        </div>
        <div className="mywork-container">
            {portfolio_data.map((work, index) => {
                return <img key={index} src={work.w_img} />
            })}
        </div>
        {/*
         <div className="mywork-showmore">
            <p>Show More</p>
            <img src={arrow_icon} alt="View my work" />
        </div> 
        */}
    </div>
  )
}

export default Portfolio