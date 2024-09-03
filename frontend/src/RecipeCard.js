import React from 'react';
import "./recipe-database.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faUtensils, faBacon, faCalculator } from '@fortawesome/free-solid-svg-icons';

function RecipeCard({title, category, image, prep_time, calories, diet_type}){
    
    return (
        <div className="recipe-card">
            <img src={image} alt={title}/>
            <h3>{title}</h3>
            <div className="info">
                <div><i className="fas fa-clock"></i> {prep_time} min</div>
                <div><i className="fas fa-utensils"></i>{category}</div>
                <div><i className="fas fa-apple-alt"></i>{diet_type}</div>
                <div><i className="fas fa-calculator"></i>{calories} kcal</div>
            </div>

            <button className="details-btn">Details</button>
        </div>
    );

}

export default RecipeCard;