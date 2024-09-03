
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
                <li key={index}>
                    {meal.title_of_meal} 
                </li>
            ));
    }

   

    return (
        <div>
            <Header />
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
                <h1>Twój Plan Posiłków</h1>
                <form className="meal-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="day">Dzień Tygodnia:</label>
                        <select
                            id="day"
                            name="day_of_week"
                            value={formData.day_of_week}
                            onChange={handleInputChange}
                            required>
                            <option value="" disabled>Wybierz dzień</option>
                            <option value="monday">Poniedziałek</option>
                            <option value="tuesday">Wtorek</option>
                            <option value="wednesday">Środa</option>
                            <option value="thursday">Czwartek</option>
                            <option value="friday">Piątek</option>
                            <option value="saturday">Sobota</option>
                            <option value="sunday">Niedziela</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="meal-type">Typ Posiłku:</label>
                        <select
                            id="meal-type"
                            name="type_of_meal"
                            value={formData.type_of_meal}
                            onChange={handleInputChange}
                            required>
                            <option value="" disabled>Wybierz posiłek</option>
                            <option value="breakfast">Śniadanie</option>
                            <option value="lunch">Lunch</option>
                            <option value="dinner">Obiad</option>
                            <option value="snack">Przekąska</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="meal-name">Nazwa Posiłku:</label>
                        <input
                            type="text"
                            id="meal-name"
                            name="title_of_meal"
                            value={formData.title_of_meal}
                            onChange={handleInputChange}
                            placeholder="np. Owsianka z owocami"
                            required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="ingredients">Składniki:</label>
                        <textarea
                            id="ingredients"
                            name="ingredients"
                            value={formData.ingredients}
                            onChange={handleInputChange}
                            placeholder="Wpisz składniki..."
                            required></textarea>
                    </div>
                    <button type="submit" className="add-meal-btn">Dodaj Posiłek</button>
                </form>

                <div className="weekly-plan">
                    <h2>Twój Tygodniowy Plan</h2>
                    <div className="days-container">
                        <div className="day" id="monday">
                            <h3>Poniedziałek</h3>
                            <ul className="meals-list">
                             
                            </ul>
                        </div>
                        <div className="day" id="tuesday">
                            <h3>Wtorek</h3>
                            <ul className="meals-list">
                                
                            </ul>
                        </div>
                        <div className="day" id="wednesday">
                            <h3>Środa</h3>
                            <ul className="meals-list">
                                
                            </ul>
                        </div>
                        <div className="day" id="thursday">
                            <h3>Thursday</h3>
                            <ul className="meals-list">
                                {renderFridayMeals('thursday')}
                            </ul>
                        </div>
                        <div className="day" id="friday">
                            <h3>Piątek</h3>
                            <ul className="meals-list">
                              
                            </ul>
                        </div>
                        <div className="day" id="saturday">
                            <h3>Sobota</h3>
                            <ul className="meals-list">
                                {renderFridayMeals('saturday')}
                            </ul>
                        </div>
                        <div className="day" id="sunday">
                            <h3>Niedziela</h3>
                            <ul className="meals-list">
                               
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Plan;
