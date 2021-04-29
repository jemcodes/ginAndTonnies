import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import DemoButton from '../DemoButton';
import './Navigation.css';

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <div>
                <ProfileButton user={sessionUser} />
                <NavLink to="/drinks/new">Create A Drink</NavLink>
            </div>
        );
    } else {
        sessionLinks = (
            <div>
                <nav className="main-nav">
                    <ul>
                        <li><LoginFormModal /></li>
                        <li><NavLink to="/signup">
                                <button type="button">
                                    Sign Up
                                </button>
                            </NavLink>
                        </li>
                        {/* <li>
                            <DemoButton />
                        </li> */}
                    </ul>
                </nav>
            </div>
        );
    }

    return (
        <ul>
            <li>
                <NavLink exact to="/">Home</NavLink>
                {isLoaded && sessionLinks}
            </li>
        </ul>
    );
}

export default Navigation;