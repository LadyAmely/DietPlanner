import React from 'react';
import './header.css';
function Header(){
    
    return(
        <header>
            <div className="logo">DietPlanner</div>
            <nav>
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/plans">Plans</a></li>
                    <li><a href="/recipes">Recipes</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>


               
            </nav>
        </header>


    );
}

export default Header;