import React from 'react';
import "./recipe-database.css";

function RecipeCard({title, category, image, prep_time, calories, diet_type}){
    
    return (
        <div className="recipe-card">
            <img src={image} alt={title}/>
            <h3>{title}</h3>
            <p>{category}</p>
            <p>{calories}</p>
            <p>{prep_time}</p>
            <p>{diet_type}</p>
            <button className="btn details-btn">Details</button>
        </div>
    );

}

export default RecipeCard;