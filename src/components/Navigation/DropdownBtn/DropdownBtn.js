import React from 'react';

import classes from './DropdownBtn.module.css';
import { FaBars } from 'react-icons/fa';


const DropdownBtn = (props) => {
    return (
        <div className={classes.dropdownBtn} onClick={props.openDropdown}>
            <FaBars className={props.toggle ? [classes.dropdownBtnIcon, classes.active].join(' ') : classes.dropdownBtnIcon }/>
        </div>
    );
};

export default DropdownBtn;