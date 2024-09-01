import React from 'react';
import "./recipe-database.css";

function RecipeCard({title, category, image}){
    
    return (
        <div className="recipe-card">
            <img src={image} alt={title}/>
            <h3>{title}</h3>
            <p>{category}</p>
            <button className="btn details-btn">Details</button>
        </div>
    );

}

export default RecipeCard;