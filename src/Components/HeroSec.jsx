import React from "react";
import "../Components/Hero.css";

const HeroSec = () => {
    return (
        <>
            <div className="heading-text">
                <h2 style={{ fontSize: "30px" }}>
                    Where Fitness Meets Fun and Results Are Achieved
                </h2>
                <p style={{ opacity: "0.7" }}>
                    Include an inspiring image or video that showcases your gym's
                    energetic atmosphere, trainers, or members working out.
                </p>
            </div>
            <div className="image-box">
                <img
                    className="img-url"
                    src="https://www.pixelstalk.net/wp-content/uploads/images6/Fitness-Desktop-Wallpaper.jpg"
                />
                <img
                    className="img-url"
                    src="https://wallpaperaccess.com/full/1087621.jpg"
                />


                <img
                    className="img-url"
                    src="https://img.freepik.com/premium-photo/woman-training-gym_946657-755.jpg"
                />
                <img
                    className="img-url"
                    src="https://i.ytimg.com/vi/gey73xiS8F4/maxresdefault.jpg"
                />

                <img
                    className="img-url"
                    src="https://img.freepik.com/free-photo/portrait-shirtless-muscular-male-doing-biceps-workouts-grey-background_613910-1480.jpg?size=626&ext=jpg&ga=GA1.1.1351262170.1707637446&semt=ais"
                />

                <img
                    className="img-url"
                    src="https://wallpapercave.com/wp/wp6331008.jpg"
                />
            </div>
        </>
    );
};

export default HeroSec;
