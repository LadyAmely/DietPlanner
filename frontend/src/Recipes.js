import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import "./home.css";
import "./search.css";
import "./recipe-database.css";
import RecipeCard from "./RecipeCard";

function Recipes(){

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5029/api/Recipe')
            .then(response => {
                setRecipes(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the books!', error);
            });
    }, []);
    
    return(
        <div>
            <Header/>
            <section className="hero">

                <div className="background-images">

                    <div className="image-container">
                        <img
                            src="https://th.bing.com/th/id/R.7d5b5e5cd55b25e8c62f26d55c299007?rik=LBpCUVZ88Y4WXA&pid=ImgRaw&r=0"
                            alt="first"/>
                    </div>
                    <div className="image-container">
                        <img
                            src="https://th.bing.com/th/id/R.0571c6388470b3528ab5fbe98232fe46?rik=612d1m2PbMvL5g&pid=ImgRaw&r=0"
                            alt="second"/>
                    </div>
                    <div className="image-container">
                        <img
                            src="https://linkiafp.es/wp-content/uploads/2023/02/buddha-bowl-dish-with-vegetables-legumes-top-view-scaled.jpg"
                            alt="third"/>
                    </div>
                    <div className="image-container">
                        <img
                            src="https://latinbusinesstoday.com/wp-content/uploads/2022/03/AdobeStock_236139531-fruit-scaled-1.jpeg"
                            alt="four"/>
                    </div>
                    <div className="image-container">
                        <img
                            src="https://cdn.dietitiandirectory.com/wp-content/uploads/2022/09/Plant-based-Menu-Items-In-Alberta-Restaurants.jpg"
                            alt="five"/>
                    </div>
                    <div className="image-container">
                        <img
                            src="https://www.hellozdrowie.pl/wp-content/uploads/2022/04/istock-1323727763-1140x760.jpg"
                            alt="six"/>
                    </div>


                </div>

                <div className="blur-container">

                    <h2>DietPlanner</h2>
                    <p>Eat better every day and transform your life with balanced nutrition and mindful eating
                        habits.</p>
                    <button>Start Now</button>

                </div>


            </section>

            <div className="recipe-select">
                <input type="text" id="searchInput" placeholder="Search recipes..."/>
                <select>
                    <option value="All">All diets</option>
                    <option value="vege">Vege</option>
                    <option value="vegetarian">Vegetarian</option>
                </select>
                
                <button className="btn search-btn">Search</button>

            </div>
            <section className="recipe-database">
                <div className="container">
                    <h2>Recipes</h2>

                    <div className="recipe-list">
                        {recipes.map(recipe=>(
                            
                            <RecipeCard
                                image={recipe.image}
                                title={recipe.title}
                                category={recipe.category}
                            />
                        ))}

                        

                    </div>
                </div>
            </section>
        </div>
    );
}

export default Recipes;