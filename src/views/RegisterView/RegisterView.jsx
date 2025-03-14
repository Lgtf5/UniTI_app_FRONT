import React from "react";
import "./RegisterView.css"
import OkButton from "../../components/buttons/OkButton";
import FooterApp from "../../components/FooterApp/FooterApp";
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
                <image className="eye" src="./eye.svg" onClick="tooglePassword()" class="toggle-password" />

            </div>

            <div className="input-password">
                <input type="password" className="password" placeholder="Confirm password">
                </input>
                <image className="eye" src="./eye.svg" onClick="tooglePassword()" class="toggle-password" />
            </div>

            <OkButton />
            <FooterApp />
        </div>

    )
}
export default RegisterView