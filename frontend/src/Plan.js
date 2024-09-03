
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import "./plan.css";
import "./home.css";

function Plan() {

    const [meals, setMeals] = useState([]);
    
    const [formData, setFormData] = useState({
        day_of_week: '',
        type_of_meal: '',
        title_of_meal: '',
        ingredients: ''
    });
    const [isAdded, setIsAdded] = useState(false);

    useEffect(() => {
        const addedPlan = JSON.parse(localStorage.getItem('addedPlan')) || {};
        setIsAdded(!!addedPlan[formData.title_of_meal]);
    }, [formData.title_of_meal]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault(); 

        axios.post('http://localhost:5029/api/plan', formData)
            .then(response => {
                setIsAdded(true);
                const addedPlan = JSON.parse(localStorage.getItem('addedPlan')) || {};
                addedPlan[formData.title_of_meal] = true;
                localStorage.setItem('addedPlan', JSON.stringify(addedPlan));
               
                setFormData({
                    day_of_week: '',
                    type_of_meal: '',
                    title_of_meal: '',
                    ingredients: ''
                });
            })
            .catch(error => {
                console.error('There was an error adding the plan!', error);
            });
    };
    
    useEffect(() => {
        axios.get('http://localhost:5029/api/plan') 
            .then(response => {
                setMeals(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    function renderFridayMeals(day) {
        return meals
            .filter(meal => meal.day_of_week === day)
            .map((meal, index) => (
                <div key={index}>

                    <li>
                        <h3>{meal.type_of_meal}</h3> : <br/>{meal.title_of_meal} <br/>
                        <div className="ingredients">
                            <h3>Ingredients</h3> : <br/> {meal.ingredients}
                        </div>

                    </li>


                </div>

            ));
    }


    return (
        <div>
            <Header/>
            <section className="hero">
                <div className="background-images">
                    <div className="image-container">
                        <img
                            src="https://th.bing.com/th/id/R.7d5b5e5cd55b25e8c62f26d55c299007?rik=LBpCUVZ88Y4WXA&pid=ImgRaw&r=0"
                            alt="first" />
                    </div>
                    <div className="image-container">
                        <img
                            src="https://th.bing.com/th/id/R.0571c6388470b3528ab5fbe98232fe46?rik=612d1m2PbMvL5g&pid=ImgRaw&r=0"
                            alt="second" />
                    </div>
                    <div className="image-container">
                        <img
                            src="https://linkiafp.es/wp-content/uploads/2023/02/buddha-bowl-dish-with-vegetables-legumes-top-view-scaled.jpg"
                            alt="third" />
                    </div>
                    <div className="image-container">
                        <img
                            src="https://latinbusinesstoday.com/wp-content/uploads/2022/03/AdobeStock_236139531-fruit-scaled-1.jpeg"
                            alt="four" />
                    </div>
                    <div className="image-container">
                        <img
                            src="https://cdn.dietitiandirectory.com/wp-content/uploads/2022/09/Plant-based-Menu-Items-In-Alberta-Restaurants.jpg"
                            alt="five" />
                    </div>
                    <div className="image-container">
                        <img
                            src="https://www.hellozdrowie.pl/wp-content/uploads/2022/04/istock-1323727763-1140x760.jpg"
                            alt="six" />
                    </div>
                </div>
                <div className="blur-container">
                    <h2>DietPlanner</h2>
                    <p>Eat better every day and transform your life with balanced nutrition and mindful eating habits.</p>
                    <button>Start Now</button>
                </div>
            </section>

            <section className="meal-planner-section">
                <h1>Your Meal Plan</h1>
                <form className="meal-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="day">Day of the Week:</label>
                        <select
                            id="day"
                            name="day_of_week"
                            value={formData.day_of_week}
                            onChange={handleInputChange}
                            required>
                            <option value="" disabled>Select a day</option>
                            <option value="monday">Monday</option>
                            <option value="tuesday">Tuesday</option>
                            <option value="wednesday">Wednesday</option>
                            <option value="thursday">Thursday</option>
                            <option value="friday">Friday</option>
                            <option value="saturday">Saturday</option>
                            <option value="sunday">Sunday</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="meal-type">Type of meal:</label>
                        <select
                            id="meal-type"
                            name="type_of_meal"
                            value={formData.type_of_meal}
                            onChange={handleInputChange}
                            required>
                            <option value="" disabled>Select a meal</option>
                            <option value="breakfast">Breakfast</option>
                            <option value="lunch">Lunch</option>
                            <option value="dinner">Dinner</option>
                            <option value="snack">Snack</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="meal-name">Name of the meal</label>
                        <input
                            type="text"
                            id="meal-name"
                            name="title_of_meal"
                            value={formData.title_of_meal}
                            onChange={handleInputChange}
                            placeholder="e.g. Oatmeal with fruit"
                            required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="ingredients">Ingredients:</label>
                        <textarea
                            id="ingredients"
                            name="ingredients"
                            value={formData.ingredients}
                            onChange={handleInputChange}
                            placeholder="Enter ingredients..."
                            required></textarea>
                    </div>
                    <button type="submit" className="add-meal-btn">Add meal</button>
                </form>

                <div className="weekly-plan">
                    <h2>Your weekly plan</h2>
                    <div className="days-container">
                        <div className="day" id="monday">
                            <h3>Monday</h3>
                            <ul className="meals-list">
                                {renderFridayMeals('monday')}
                            </ul>
                        </div>
                        <div className="day" id="tuesday">
                            <h3>Tuesday</h3>
                            <ul className="meals-list">
                                {renderFridayMeals('tuesday')}
                            </ul>
                        </div>
                        <div className="day" id="wednesday">
                            <h3>Wednesday</h3>
                            <ul className="meals-list">
                                {renderFridayMeals('wednesday')}
                            </ul>
                        </div>
                        <div className="day" id="thursday">
                            <h3>Thursday</h3>
                            <ul className="meals-list">
                                {renderFridayMeals('thursday')}
                            </ul>
                        </div>
                        <div className="day" id="friday">
                            <h3>Friday</h3>
                            <ul className="meals-list">
                                {renderFridayMeals('friday')}
                            </ul>
                        </div>
                        <div className="day" id="saturday">
                            <h3>Saturday</h3>
                            <ul className="meals-list">
                                {renderFridayMeals('saturday')}
                            </ul>
                        </div>
                        <div className="day" id="sunday">
                            <h3>Sunday</h3>
                            <ul className="meals-list">
                                {renderFridayMeals('sunday')}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Plan;
