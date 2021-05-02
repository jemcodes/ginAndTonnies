import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, NavLink } from "react-router-dom";
import * as sessionActions from "../../store/session";
import DemoButton from '../DemoButton';
import Footer from '../Footer';
import './SignupForm.css';

function SignupFormPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);

    if (sessionUser) return <Redirect to="/drinks" />;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            setErrors([]);
            return dispatch(sessionActions.signup({ email, username, password }))
                .catch(async (res) => {
                    const data = await res.json();
                    if (data && data.errors) setErrors(data.errors);
                });
        }
        return setErrors(['Confirm Password field must be the same as the Password field']);
    };

    return (
        <div>
        <form className="signup-form-background" onSubmit={handleSubmit}>
            <ul>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
            <div id="signup-container">
                <img id="signup-banner"src={process.env.PUBLIC_URL + './images/drinksheader2.png'} alt={"Colorful drinks"} />
                <h1>DRINKS ARE BETTER WITH FRIENDS</h1>
                <h2>we're glad you're here!</h2>
                <label>
                <input id="signup-email-field"
                    placeholder="EMAIL"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />
                </label>
                <label className="signup-label-text">
                <input id="signup-username-field"
                    placeholder="USERNAME"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                </label>
                <label className="signup-label-text">
                <input id="signup-password-field"
                    placeholder="PASSWORD"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                </label>
                <label className="signup-label-text">
                <input id="signup-confirm-field"
                    placeholder="CONFIRM PASSWORD"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
                </label>
                <button className="signup-form-button" type="submit">Sign Up</button>
                
                <NavLink className="cancel-signup "
                    to={`/`}>CANCEL
                </NavLink>
            </div>
        </form>
            <div id="demo-footer-signup">
                <DemoButton />
            </div>
                <Footer />
        </div>
    );
}

export default SignupFormPage;