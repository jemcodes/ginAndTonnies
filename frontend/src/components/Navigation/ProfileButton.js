import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import './Navigation.css';

function ProfileButton({ user }) {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
    };

    return (
        <>
            <button id="nav-logout-button" onClick={logout} className="link-text">Log Out</button>
            {/* <button id="nav-profile-button" onClick={openMenu}>Profile</button>
            {showMenu && (
                <ul className="profile-dropdown">
                    <li className="link-text">{user.username}</li>
                    <li className="link-text">{user.email}</li>
                    <li>
                        
                    </li>
                </ul>
            )} */}
        </>
    );
}

export default ProfileButton;