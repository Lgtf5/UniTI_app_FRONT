
import React from "react";
import "./LoginView.css"
import OkButton from "../buttons/OkButton";



function LoginView() {

    return(
        <div>
            <h1 className="title-login">Welcome Back</h1>
            <div className="input-username">
                <input type="text" className="username" placeholder="Enter username"></input>
            </div>

            <div className="input-password">
                <input type="text" className="password" placeholder="Enter password"> 
              {/*   <image className="eye" src="./eye.svg"/> */}
                </input>
            </div>
            
            <OkButton/>
        </div>
    
    )
}
export default LoginView