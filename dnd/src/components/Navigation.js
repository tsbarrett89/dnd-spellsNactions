import React from 'react';

import { NavBar, Links } from '../styling'

const Navigation = () => {

    return(
        <NavBar>      
            <Links to='/'>Options</Links>
            <Links to='/character'>Character</Links>
        </NavBar>
    )
}

export default Navigation