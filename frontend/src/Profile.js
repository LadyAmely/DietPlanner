import React from 'react';
import Header from "./Header";
import "./profile.css";

function Profile(){
    
    return(
        <div>
            <Header/>
            <div className="profile-picture-container">
                <img src="https://mata.org.my/wp-content/uploads/2022/09/Profile-PNG-File.png" alt="Profile Picture" className="profile-picture"/>
            </div>

            <div className="outer-container">
                <div className="profile-container">
                    <div className="profile-details">
                        <h2 className="profile-name">John Doe</h2>
                        <p className="profile-info"><strong>Email:</strong> johndoe@example.com</p>
                        <p className="profile-info"><strong>Weight:</strong> 70 kg</p>
                        <p className="profile-info"><strong>Height:</strong> 175 cm</p>
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