import React from "react";

const About = (props) => {
    return(
        <div id="about">
            <div className="about-image">
                <img src={props.image} alt="" />
            </div>
            <div className="about-text">
                <h2>{props.title}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quisquam inventore, aut nulla, laborum quidem optio accusamus dolores magni, accusantium vel esse! Blanditiis, excepturi porro! Omnis voluptas quo eligendi molestiae porro neque architecto minus ullam.</p>
                <button>{props.button}</button>
            </div>
        </div>
    );
}

export default About;