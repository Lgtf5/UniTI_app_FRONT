
import React from "react";
import "./LoginView.css"
import OkButton from "../../components/buttons/OkButton";



function LoginView() {
    const navigate = useNavigate();
    const hadleLogin = () => {
        navigate('/welcome');
    };


    return (
        <div className="login-container">
            <h1 className="title-login">Welcome Back</h1>
            <div>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    handleLogin();
                }}>
                    <div className="input-username">
                        <input type="text" className="username" placeholder="Enter username"></input>
                    </div>

                    <div className="input-password">
                        <input type="password" className="password" placeholder="Enter password">
                            <image className="eye" src="./eye.svg" />
                        </input>
                    </div>

                    <OkButton type="submit" />
                </form>
            </div>
        </div>

    )
}
export default LoginView