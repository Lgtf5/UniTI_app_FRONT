
import {useState} from "react";
import "./LoginView.css"
import OkButton from "../../components/buttons/OkButton";
import FooterRegister from "../../components/FooterApp/FooterRegister"
import HeaderApp from "../../components/headerApp/HeaderApp"


const LoginView = () => {
    const [formData, setFormData] = useState ({
        user:'',
        password:''
    });
    const [upload, setUpload] = useState (false);
    const [error, setError] = useState ('');
    const [passwordView, setPasswordView] = useState (false);

    const handleChange = () => {
        const {name, value} = e.target;
        setFormData (prev => ({
            ...prev,
            [name]: value
        }));
    };
    const togglePassword = () =>{
        e.preventDefault();
        setPasswordView(!passwordView);
    };

    
    const handleSubmit = async () => {
        e.preventDefault();
        setUpload(true);
        setError('');

        try {
            const response = await new Promise ((resolve) => {
                setTimeout(()=> {
                if (formData.user ==='admin' && formData.password === 'admin') {resolve({token:'test-token'})}
                else {
                    throw new Error ('User or password invalid'); }
                }
            )}, 1000);
            localStorage.setItem ('authToken', response.token);
            window.location.href = '/SectionView';
        } catch (error) {
            setError(error.message || 'Invalid Signin');
        } finally {
            setUpload(false);
        }
    }
            
    
    return (
        <div>
            <HeaderApp />
            <h1 className="title-login">Welcome Back</h1>
            <form onSubmit={handleSubmit}>
            <div className="input-username">
                <input 
                type="text" name="user" value= {formData.user} onChange={handleChange} className="username" placeholder="Enter username" required/>
            </div>

            <div className="input-password">
                <input type={passwordView ? 'text' : 'password'} name="password" value= {formData.password} onChange={handleChange} className="password" placeholder="Enter password" required/>
                
                <div className="eye-container">
                    <img className="eye" src="/eye.svg" onClick={togglePassword} alt="toggle password visibility" />
                </div>
                {error && <p>{error}</p>}
            </div>
            <OkButton type="submit" disabled = {upload}/>
            
            </form>
            <FooterRegister />
        </div >
    )
}
    


export default LoginView