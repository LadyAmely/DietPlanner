import React, { useEffect, useState } from 'react';
import Header from "./Header";
import "./profile.css";
import axios from "axios";

function Profile() {
    const [users, setUser] = useState([]);
    const [editMode, setEditMode] = useState({
        personalData: false,
        calorieBmi: false,
        healthInfo: false
    });
    const [editValues, setEditValues] = useState({});

    useEffect(() => {
        axios.get('http://localhost:5029/api/profile')
            .then(response => {
                setUser(response.data);
                if (response.data.length > 0) {
                    const user = response.data[0]; 
                    setEditValues({
                        username: user.username,
                        weight: user.weight,
                        height: user.height,
                        age: user.age,
                        sex: user.sex,
                        daily_calorie_goal: user.daily_calorie_goal,
                        actual_bmi: user.actual_bmi,
                        bmi_goal: user.bmi_goal,
                        diseases: user.diseases || '',
                        allergies: user.allergies || '',
                        dietary_restrictions: user.dietary_restrictions || ''
                    });
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const handleEditClick = (section) => {
        setEditMode({ ...editMode, [section]: !editMode[section] });
    };

    const handleChange = (e) => {
        setEditValues({
            ...editValues,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div>
            <Header />
            <div className="profile-picture-container">
                <img src="https://mata.org.my/wp-content/uploads/2022/09/Profile-PNG-File.png" alt="Profile Picture" className="profile-picture" />
            </div>

            <div className="outer-container">
                {/* Personal Data Section */}
                <div className="profile-container">
                    <div className="profile-details">
                        <h2 className="profile-name">Personal Data</h2>
                        {users.length > 0 && (
                            <div className="profile-item">
                                {editMode.personalData ? (
                                    <div>
                                        <p className="profile-info">
                                            <strong>Name:</strong>
                                            <input
                                                type="text"
                                                name="username"
                                                value={editValues.username}
                                                onChange={handleChange}
                                            />
                                        </p>
                                        <p className="profile-info">
                                            <strong>Weight:</strong>
                                            <input
                                                type="number"
                                                name="weight"
                                                value={editValues.weight}
                                                onChange={handleChange}
                                            /> kg
                                        </p>
                                        <p className="profile-info">
                                            <strong>Height:</strong>
                                            <input
                                                type="number"
                                                name="height"
                                                value={editValues.height}
                                                onChange={handleChange}
                                            /> cm
                                        </p>
                                        <p className="profile-info">
                                            <strong>Age:</strong>
                                            <input
                                                type="number"
                                                name="age"
                                                value={editValues.age}
                                                onChange={handleChange}
                                            />
                                        </p>
                                        <p className="profile-info">
                                            <strong>Sex:</strong>
                                            <select
                                                name="sex"
                                                value={editValues.sex}
                                                onChange={handleChange}
                                            >
                                                <option value="M">Male</option>
                                                <option value="F">Female</option>
                                            </select>
                                        </p>
                                    </div>
                                ) : (
                                    <div>
                                        <p className="profile-info"><strong>Name:</strong> {editValues.username}</p>
                                        <p className="profile-info"><strong>Weight:</strong> {editValues.weight} kg</p>
                                        <p className="profile-info"><strong>Height:</strong> {editValues.height} cm</p>
                                        <p className="profile-info"><strong>Age:</strong> {editValues.age}</p>
                                        <p className="profile-info"><strong>Sex:</strong> {editValues.sex === 'F' ? 'Female' : 'Male'}</p>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                    <div className="profile-actions">
                        <button className="edit-button" onClick={() => handleEditClick('personalData')}>
                            {editMode.personalData ? 'Save' : 'Edit'}
                        </button>
                    </div>
                </div>

               
                <div className="profile-container">
                    <div className="profile-details">
                        <h2 className="profile-name">Monitoring Calorie Goal and BMI</h2>
                        {users.length > 0 && (
                            <div>
                                {editMode.calorieBmi ? (
                                    <div>
                                        <p className="profile-info">
                                            <strong>Daily Calorie Goal:</strong>
                                            <input
                                                type="number"
                                                name="daily_calorie_goal"
                                                value={editValues.daily_calorie_goal}
                                                onChange={handleChange}
                                            /> kcal
                                        </p>
                                        <p className="profile-info">
                                            <strong>Actual BMI:</strong>
                                            <input
                                                type="number"
                                                name="actual_bmi"
                                                value={editValues.actual_bmi}
                                                onChange={handleChange}
                                            />
                                        </p>
                                        <p className="profile-info">
                                            <strong>BMI Goal:</strong>
                                            <input
                                                type="number"
                                                name="bmi_goal"
                                                value={editValues.bmi_goal}
                                                onChange={handleChange}
                                            />
                                        </p>
                                    </div>
                                ) : (
                                    <div>
                                        <p className="profile-info"><strong>Daily Calorie Goal:</strong> {editValues.daily_calorie_goal} kcal</p>
                                        <p className="profile-info"><strong>Actual BMI:</strong> {editValues.actual_bmi}</p>
                                        <p className="profile-info"><strong>BMI Goal:</strong> {editValues.bmi_goal}</p>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                    <div className="profile-actions">
                        <button className="edit-button" onClick={() => handleEditClick('calorieBmi')}>
                            {editMode.calorieBmi ? 'Save' : 'Edit'}
                        </button>
                    </div>
                </div>

                {/* Health Condition and Dietary Restrictions Section */}
                <div className="profile-container">
                    <div className="profile-details">
                        <h2 className="profile-name">Health Condition and Dietary Restrictions</h2>
                        {users.length > 0 && (
                            <div>
                                {editMode.healthInfo ? (
                                    <div>
                                        <p className="profile-info">
                                            <strong>Diseases:</strong>
                                            <input
                                                type="text"
                                                name="diseases"
                                                value={editValues.diseases}
                                                onChange={handleChange}
                                            />
                                        </p>
                                        <p className="profile-info">
                                            <strong>Allergies:</strong>
                                            <input
                                                type="text"
                                                name="allergies"
                                                value={editValues.allergies}
                                                onChange={handleChange}
                                            />
                                        </p>
                                        <p className="profile-info">
                                            <strong>Dietary Restrictions:</strong>
                                            <input
                                                type="text"
                                                name="dietary_restrictions"
                                                value={editValues.dietary_restrictions}
                                                onChange={handleChange}
                                            />
                                        </p>
                                    </div>
                                ) : (
                                    <div>
                                        <p className="profile-info"><strong>Diseases:</strong> {editValues.diseases || 'None'}</p>
                                        <p className="profile-info"><strong>Allergies:</strong> {editValues.allergies || 'None'}</p>
                                        <p className="profile-info"><strong>Dietary Restrictions:</strong> {editValues.dietary_restrictions || 'None'}</p>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                    <div className="profile-actions">
                        <button className="edit-button" onClick={() => handleEditClick('healthInfo')}>
                            {editMode.healthInfo ? 'Save' : 'Edit'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
