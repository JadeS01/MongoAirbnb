import { Link, useNavigate } from "react-router-dom";
import '../App.css';
import { useState } from "react";

const NavBar = (): JSX.Element => {
    return (
        <>
            <header>
                <div>Logo</div>
                <div>
                    <nav>
                        <ul>
                            <Link to="/search">Search</Link>
                            <Link to="/about">About</Link>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
};

export { NavBar };