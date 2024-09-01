import React from 'react';
import './home.css';
import './daily-summary.css';
import './meal-plans.css';

import Header from './Header';
function Home(){
    
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
                    <h2>Podsumowanie Dnia</h2>
                    <div className="summary-card">
                        <h3>Dzienne Cele Dietetyczne</h3>
                        <div className="goal">
                            <span>Kalorie:</span>
                            <span className="goal-value">2000 kcal</span>
                        </div>
                        <div className="goal">
                            <span>Białko:</span>
                            <span className="goal-value">100 g</span>
                        </div>
                        <div className="goal">
                            <span>Węglowodany:</span>
                            <span className="goal-value">250 g</span>
                        </div>
                        <div className="goal">
                            <span>Tłuszcze:</span>
                            <span className="goal-value">70 g</span>
                        </div>
                    </div>
                    <div className="summary-card">
                        <h3>Spisane Posiłki</h3>
                        <div className="meal-status">
                            <span>Śniadanie:</span>
                            <span className="status-completed">Zrealizowane</span>
                        </div>
                        <div className="meal-status">
                            <span>Obiad:</span>
                            <span className="status-completed">Zrealizowane</span>
                        </div>
                        <div className="meal-status">
                            <span>Kolacja:</span>
                            <span className="status-pending">Oczekujące</span>
                        </div>
                        <div className="meal-status">
                            <span>Przekąski:</span>
                            <span className="status-completed">Zrealizowane</span>
                        </div>
                    </div>
                    <div className="summary-card">
                        <h3>Podsumowanie Kalorii i Makroskładników</h3>
                        <div className="nutrients">
                            <div className="nutrient">
                                <span>Kalorie:</span>
                                <span className="nutrient-value">1500 kcal</span>
                            </div>
                            <div className="nutrient">
                                <span>Białko:</span>
                                <span className="nutrient-value">80 g</span>
                            </div>
                            <div className="nutrient">
                                <span>Węglowodany:</span>
                                <span className="nutrient-value">200 g</span>
                            </div>
                            <div className="nutrient">
                                <span>Tłuszcze:</span>
                                <span className="nutrient-value">60 g</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="meal-plan">
                <div className="container">
                    <h2>Plan Posiłków</h2>
                    <div className="meal-plan-header">
                        <button className="btn toggle-week">Przełącz Tydzień</button>
                    </div>
                    <div className="meal-plan-day">
                        <h3>Dzień: Poniedziałek</h3>
                        <ul className="meal-list">
                            <li className="meal-item">
                                <div className="meal-info">
                                    <h4>Śniadanie</h4>
                                    <p>Owsianka z owocami</p>
                                </div>
                                <button className="btn details-btn">Szczegóły</button>
                                <button className="btn edit-btn">Edytuj</button>
                            </li>
                            <li className="meal-item">
                                <div className="meal-info">
                                    <h4>Obiad</h4>
                                    <p>Grillowany kurczak z warzywami</p>
                                </div>
                                <button className="btn details-btn">Szczegóły</button>
                                <button className="btn edit-btn">Edytuj</button>
                            </li>
                            <li className="meal-item">
                                <div className="meal-info">
                                    <h4>Kolacja</h4>
                                    <p>Sałatka z tuńczykiem</p>
                                </div>
                                <button className="btn details-btn">Szczegóły</button>
                                <button className="btn edit-btn">Edytuj</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            
        </div>
    );
}

export default Home;