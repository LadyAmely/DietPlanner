import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './home.css';
import './daily-summary.css';
import './meal-plans.css';

import Header from './Header';
function Home(){
    
    const [meals, setMeals] = useState([]);

    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    const [currentDayIndex, setCurrentDayIndex] = useState(0);

    const switchDay = () => {
        setCurrentDayIndex((prevIndex) => (prevIndex + 1) % daysOfWeek.length);
    };

    const [users, setUser] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:5029/api/profile')
            .then(response => {
                setUser(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);
    
    useEffect(() => {
        axios.get('http://localhost:5029/api/plan')
            .then(response => {
                setMeals(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    function renderDayMeals(day, type) {
        return meals
            .filter(meal => meal.day_of_week === day)
            .filter(meal=>meal.type_of_meal === type)
            .map((meal, index) => (
                <div key={index}>
                    <li>
                       {meal.title_of_meal} 
                    </li>
                </div>
            ));
    }
    
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

            <section className="daily-summary">
                <div className="container">
                    <h2>Summary of the day</h2>
                    <div className="summary-card">
                        <h3>Daily Calorie Goal</h3>
                        <div className="goal">
                            <span>Calories:</span>
                            {users.map(user => (
                                <span className="goal-value">{user.daily_calorie_goal} kcal</span>
                            ))}
                           
                        </div>
                        <div className="goal">
                            <span>Protein:</span>
                            <span className="goal-value">100 g</span>
                        </div>
                        <div className="goal">
                            <span>Carbohydrates:</span>
                            <span className="goal-value">250 g</span>
                        </div>
                        <div className="goal">
                            <span>Fats:</span>
                            <span className="goal-value">70 g</span>
                        </div>
                    </div>
                    <div className="summary-card">
                        <h3>Calorie and Macronutrient Summary</h3>
                        <div className="nutrients">
                            <div className="nutrient">
                                <span>Calories:</span>
                                <span className="nutrient-value">1500 kcal</span>
                            </div>
                            <div className="nutrient">
                                <span>Protein:</span>
                                <span className="nutrient-value">80 g</span>
                            </div>
                            <div className="nutrient">
                                <span>Carbohydrates:</span>
                                <span className="nutrient-value">200 g</span>
                            </div>
                            <div className="nutrient">
                                <span>Fats:</span>
                                <span className="nutrient-value">60 g</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="meal-plan">
                <div className="container">
                    <h2>Meals Planner</h2>
                    <div className="meal-plan-header">
                        <button onClick={switchDay} className="btn">Next day</button>
                    </div>
                    <div className="meal-plan-day">
                        <h3>{daysOfWeek[currentDayIndex]}</h3>
                        <ul className="meal-list">
                            <li className="meal-item">
                                <div className="meal-info">
                                    <h3>Breakfast</h3>
                                    {renderDayMeals(daysOfWeek[currentDayIndex].toLowerCase(), 'breakfast')}
                                </div>
                                <button>Details</button>
                            </li>
                            <li className="meal-item">
                                <div className="meal-info">
                                    <h3>Lunch</h3>
                                    {renderDayMeals(daysOfWeek[currentDayIndex].toLowerCase(), 'lunch')}
                                </div>
                                <button>Details</button>
                            </li>
                            <li className="meal-item">
                                <div className="meal-info">
                                    <h3>Dinner</h3>
                                    {renderDayMeals(daysOfWeek[currentDayIndex].toLowerCase(), 'dinner')}
                                </div>
                                <button>Details</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            
        </div>
    );
}

export default Home;