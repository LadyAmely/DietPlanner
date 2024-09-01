import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import "./home.css";
import "./search.css";
import "./recipe-database.css";
import RecipeCard from "./RecipeCard";

function Recipes(){

    const [recipes, setRecipes] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOption, setSortOption] = useState('title');
    const[dietTypeFilter, setDietTypeFilter] = useState('All');
    const [calorieRange, setCalorieRange] = useState(100);
    

    useEffect(() => {
        axios.get('http://localhost:5029/api/Recipe')
            .then(response => {
                setRecipes(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the books!', error);
            });
    }, []);

    const filteredRecipes = recipes
        .filter(recipe =>
            recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .filter(recipe =>
            dietTypeFilter === 'All' || recipe.diet_type === dietTypeFilter
        )
        .sort((a, b) => {
            if (sortOption === 'Calories') {
                return a.calories - b.calories; 
            } else if (sortOption === 'title') {
                return a.title.localeCompare(b.title); 
            }
            return 0;
        });

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
                <button className="btn search-btn">Search</button>
                <label htmlFor="diet_type_select_id">Diet Type:</label>
                <select id="diet_type_select_id" value={dietTypeFilter}
                        onChange={e => setDietTypeFilter(e.target.value)}>
                    <option value="All">All diets</option>
                    <option value="Vegan">Vegan</option>
                    <option value="Vegetarian">Vegetarian</option>
                    <option value="Mediterranean">Mediterranean</option>
                    <option value="Ketogenic">Ketogenic</option>
                    <option value="Gluten-Free">Gluten-Free</option>
                    <option value="Low-Carb">Low-Carb</option>
                    <option value="Low-Fat">Low-Fat</option>
                </select>
                <label htmlFor="prep_time_id">time:</label>
                <select id="prep_time_id">
                    <option value="10">10 min</option>
                    <option value="15">15 min</option>
                    <option value="20">20 min</option>
                    <option value="25">25 min</option>
                    <option value="30">30 min</option>
                    <option value="40">40 min</option>
                    <option value="1h">1 h</option>
                    <option value="1.5h">1.5 h</option>
                    <option value="2h">2 h</option>
                    <option value="2.5h">2.5h</option>
                    <option value="3h">3 h</option>
                </select>


                <label htmlFor="kcal_id">kcal:</label>
                <select id="kcal_id">
                    <option value="100kcal">100 kcal</option>
                    <option value="150kcal">150 kcal</option>
                    <option value="200kcal">200 kcal</option>
                    <option value="250kcal">250 kcal</option>
                    <option value="300kcal">300 kcal</option>
                    <option value="350kcal">350 kcal</option>
                    <option value="400kcal">400 kcal</option>
                    <option value="450kcal">450 kcal</option>
                    <option value="500kcal">500 kcal</option>
                    <option value="550kcal">550 kcal</option>
                    <option value="600kcal">600 kcal</option>
                    <option value="650kcal">650 kcal</option>
                    <option value="700kcal">700 kcal</option>
                    <option value="750kcal">750 kcal</option>
                </select>


            </div>
            <section className="recipe-database">
            <div className="container">
                    <h2>Recipes</h2>

                    <div className="recipe-list">
                        {filteredRecipes.map(recipe => (

                            <RecipeCard
                                image={recipe.image}
                                title={recipe.title}
                                category={recipe.category}
                                calories={recipe.calories}
                                prep_time={recipe.prep_time}
                                diet_type={recipe.diet_type}
                            />
                        ))}


                    </div>
                </div>
            </section>
        </div>
    );
}

export default Recipes;