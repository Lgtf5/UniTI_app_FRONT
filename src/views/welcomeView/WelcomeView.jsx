
import React from "react";
import "./WelcomeView.css"

function WelcomeView() {

    return(
        <div className="welcome"> 
                <img className="group" src="./fondo.svg" alt="imagen grupo" />
                <div className="welcome-title">
                <h1 className="gets">Gets <span className="resource">resource</span> with <img className="uniti-naranja" src="./UnitiNaranja.svg"/></h1>
                </div>
                <h3 className="welcome-text">
                This platform has been specifically created for you, whether you are a bootcamp student, junior programmer, or instructor, with the goal of centralizing and organizing all the necessary resources for your learning and professional growth.
                </h3>
                
        </div>
    )
}


export default WelcomeView