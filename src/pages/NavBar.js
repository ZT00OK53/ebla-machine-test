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
                        </button>
                        <div className="navbar-sm-menubar collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                            <div className="col--auto px-4 py-3 flex">
                                <NavLink to="/questions" className='navlink-text'>Home</NavLink>
                            </div>
                            <div className="col--auto px-4 py-3 flex">
                                <NavLink to="/add" className='navlink-text'>New Poll</NavLink>
                            </div>
                            <div className="col--auto px-4 py-3 flex">
                                <NavLink to="/leaderboard" className='navlink-text'>Leaderboard</NavLink>
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
