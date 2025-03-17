import React from "react";
import "./RegisterView.css"

import OkButton from "../../components/buttons/OkButton";
import FooterSign from "../../components/FooterApp/FooterSign";
import HeaderApp from "../../components/headerApp/HeaderApp";



function RegisterView() {

    return (
        <div>
            <HeaderApp />
            <h1 className="title-register">Welcome Onboard</h1>
            <div className="input-username">
                <input type="text" className="username" placeholder="Enter username"></input>
            </div>

            <div className="input-password">
                <input type="password" className="password" placeholder="Enter password">
                </input>
                <div className="eye-container">
                <img className="eye" src="/eye.svg" onClick="tooglePassword()" class="toggle-password"/>
                </div>
            </div>

            <div className="input-password">
                <input type="password" className="password" placeholder="Confirm password">
                </input>
                <div className="eye-container">
                <img className="eye" src="/eye.svg" onClick="tooglePassword()" class="toggle-password"/>
                </div>
            </div>

            <OkButton />
            <FooterSign />
        </div>

    )
}
export default RegisterView