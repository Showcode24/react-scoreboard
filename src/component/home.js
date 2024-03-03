import React from "react";
import olympicsImage from "./olympicsImage.png"; 

const Home = () => {
    return (
        <div className="home">
            <h1>Welcome to Rio 2016 <br></br>Olympics Scoreboard</h1>
                       <span>
                We are thrilled to extend a warm welcome to all visitors to our scoreboard website.<br></br>
                Here, you'll find everything you need to stay up-to-date with the latest scores, stats,<br></br>
                and highlights from your favorite sports events.
            </span>
            <img src={olympicsImage} alt="Olympics" className="olymp_image" /> {/* Use the image */}
        </div>
    );
};

export default Home;
