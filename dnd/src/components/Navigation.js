import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';

const Navigation = () => {

    return(
        <nav>
            <div>      
                    <NavLink to='/'>Options</NavLink>
                    <NavLink to='/character'>Character</NavLink>
            </div>
        </nav>
    )
}

export default Navigation