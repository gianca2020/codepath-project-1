import React from "react";

const Poster = ({ title, image, description, link }) => {
    return (
        <div className="poster">
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <p>{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer">record</a>
        </div>
    )
}

export default Poster;