import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Navigation = () => {

    return(
        <div>
            <Router>
                <Link to='/'>Options</Link>
                <Link to='/character'>Character</Link>
            </Router>
        </div>
    )
}

export default Navigation