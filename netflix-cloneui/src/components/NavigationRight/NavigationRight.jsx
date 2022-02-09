import React from 'react';
import Notifications from '../Notifications';
import User from '../User';
import DropdownIcon from '../assets/caret.svg';
import Search from '../Search';
import styles from './NavigationRight.module.css';

const NavigationRight = () => {
    return (
        <div className={styles.box}>
            <div className={styles.navItem}>
                <Search></Search>
            </div>
            <div className={styles.navItem}>
                <Notifications></Notifications>
            </div>
            <div className={styles.navItem}>
                <User></User>
            </div>
            <div className={styles.dropdown}>
                <img src={DropdownIcon} alt="" />
            </div>
        </div>
    );
};

export default NavigationRight;