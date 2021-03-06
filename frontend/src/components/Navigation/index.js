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
            <div id="nav-link-group">
                <h2 id="user-welcome-message">Cheers {sessionUser.username}!</h2>
                    <NavLink exact to="/">
                        <button id="nav-home-button" type="button">
                            Home
                            </button>
                    </NavLink>
                    <NavLink to="/drinks/">
                        <button id="nav-all-drinks-button" type="button">
                            View All Drinks
                        </button>
                    </NavLink>
                    <NavLink to="/drinks/new">
                        <button id="nav-create-drink-button" type="button">
                            Create A Drink
                        </button>
                    </NavLink>
                    <ProfileButton user={sessionUser} />
            </div>
        );
    } else {
        sessionLinks = (
            <div>
                <ul className="navigation-links">
                    <LoginFormModal />
                    <li><NavLink to="/signup">
                            <button type="button">
                                CREATE AN ACCOUNT
                            </button>
                        </NavLink>
                    </li>
                    <li>
                        <DemoButton />
                    </li>
                </ul>
            </div>
        );
    }

    return (
        <div className='nav-bar'>
            {isLoaded && sessionLinks}
        </div>
    );
}

export default Navigation;