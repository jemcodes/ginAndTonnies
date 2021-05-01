import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import DemoButton from '../DemoButton';
import './Navigation.css';

function Navigation({ isLoaded }) {
    const { id } = useParams();
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <div>
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
                <h1>Cheers {sessionUser.username}!</h1>
                <ProfileButton user={sessionUser} />
                {/* {id && (
                    <NavLink to={`/drinks/${id}/reviews`}>
                        <button id="nav-see-reviews-button" type="button">
                            See Reviews
                        </button>
                    </NavLink>
                )} */}
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
            <ul className="navigation-links">
                <li>
                    <NavLink exact to="/">
                        <button id="nav-home-button" type="button">
                            Home
                        </button>
                    </NavLink>
                    {isLoaded && sessionLinks}
                </li>
            </ul>
        </div>
    );
}

export default Navigation;