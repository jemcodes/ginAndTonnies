import React, { useState } from "react";
import { useHistory, NavLink } from 'react-router-dom';
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import DemoButton from '../DemoButton';

function LoginForm() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [credential, setCredential] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const successfulLogin = await dispatch(sessionActions.login({ credential, password })).catch(
            async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
        });
        if (successfulLogin) {
            history.push(`/drinks/`);
        }

        if (!successfulLogin) {
            return null;
        }
    };

    return (
        <form className="sign-up-form" onSubmit={handleSubmit}>
            <ul>
                {errors.map((error, idx) => (
                    <li key={idx}>{error}</li>
                ))}
            </ul>
        <label id="modal-user">
            <input id="modal-user-field"
                    placeholder="USERNAME OR EMAIL"
                    type="text"
                    value={credential}
                    onChange={(e) => setCredential(e.target.value)}
                    required
                />
        </label>
        <label id="modal-password">
            <input id="modal-password-field"
                        placeholder="PASSWORD"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
            />
        </label>
        <div className="signin-or-signup">
            <button className="welcome-button" type="submit">WELCOME BACK</button>
            <DemoButton />
            <NavLink className="signup-instead"
                to={`/signup`}>New around here? Sign up!
            </NavLink>
        </div>
        </form>
    );
}

export default LoginForm;