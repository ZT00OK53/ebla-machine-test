import React from 'react';
import { NavLink } from 'react-router-dom';
import Profile from './Profile';

const NavBar = () => {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg nav-height-bg navbar-bottom-border">
                    <div className="container">
                        <button className="navbar-sm-toggler navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            {/* <img src="static/images/hamburger-icon.svg" alt="hamburger" className="vertical-inherit" /> */}
                        </button>
                        <div className="navbar-sm-menubar collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                            <div className="col--auto px-4 py-3 flex">
                                <NavLink to="/questions" className="text-dark">Home</NavLink>
                            </div>
                            <div className="col--auto px-4 py-3 flex">
                                <NavLink to="/add" className="text-dark">New Poll</NavLink>
                            </div>
                            <div className="col--auto px-4 py-3 flex">
                                <NavLink to="/leaderboard" className="text-dark">Leaderboard</NavLink>
                            </div>
                            <div className="col--auto px-4 py-3 flex">
                                <Profile />
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default NavBar;
