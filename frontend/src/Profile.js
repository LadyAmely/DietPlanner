import React, {useEffect, useState} from 'react';
import Header from "./Header";
import "./profile.css";
import axios from "axios";

function Profile(){

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
    
    
    
    return(
        <div>
            <Header/>
            <div className="profile-picture-container">
                <img src="https://mata.org.my/wp-content/uploads/2022/09/Profile-PNG-File.png" alt="Profile Picture" className="profile-picture"/>
            </div>

            <div className="outer-container">
                <div className="profile-container">
                    <div className="profile-details">
                        <h2 className="profile-name">Personal Data</h2>
                        {users.map(user => (
                            <div key={user.profile_id} className="profile-item">
                                <p className="profile-info"><strong>Name:</strong> {user.username}</p>
                                <p className="profile-info"><strong>Weight:</strong> {user.weight} kg</p>
                                <p className="profile-info"><strong>Height:</strong> {user.height} cm</p>
                                <p className="profile-info"><strong>Age:</strong> {user.age}</p>
                                <p className="profile-info"><strong>Sex:</strong> {user.sex === 'F' ? 'Female' : 'Male'}</p>
                            </div>
                        ))}
                    </div>
                    <div className="profile-actions">
                    <button className="edit-button">Edit</button>
                    </div>
                </div>
                <div className="profile-container">
                    <div className="profile-details">
                        <h2 className="profile-name">Monitoring Calorie Goal and BMI</h2>
                        {users.map(user => (
                            <div key={user.profile_id}>
                                <p className="profile-info"><strong>Daily Calorie
                                    Goal:</strong> {user.daily_calorie_goal} kcal</p>
                                <p className="profile-info"><strong>Actual BMI:</strong> {user.actual_bmi}</p>
                                <p className="profile-info"><strong>BMI Goal:</strong> {user.bmi_goal}</p>
                            </div>
                        ))}

                    </div>
                    <div className="profile-actions">
                    <button className="edit-button">Edit</button>
                    </div>
                </div>

                <div className="profile-container">
                    <div className="profile-details">
                        <h2 className="profile-name">Health Condition and Dietary Restrictions</h2>
                        {users.map(user => (
                            <div key={user.profile_id}>
                                <p className="profile-info"><strong>Diseases:</strong> {user.diseases || 'None'}</p>
                                <p className="profile-info"><strong>Allergies:</strong> {user.allergies || 'None'}</p>
                                <p className="profile-info"><strong>Dietary
                                    Restrictions:</strong> {user.dietary_restrictions || 'None'}</p>
                            </div>
                        ))}
                    </div>
                    <div className="profile-actions">
                        <button className="edit-button">Edit</button>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Profile;