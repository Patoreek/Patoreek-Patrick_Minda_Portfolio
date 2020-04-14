import React from 'react';

import NavigationItems from '../../NavigationItems/NavigationItems';
import classes from './Dropdown.module.css';


const Dropdown = (props) => {
    return (
        <div className={!props.toggle ? [classes.dropdownContainer, classes.hide].join(' ') : classes.dropdownContainer }>
            <NavigationItems dropdown={true} closeDropdown={props.closeDropdown}/>
        </div>
    );
};

export default Dropdown;