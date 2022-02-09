import React from "react";

import NavigationRight from "../NavigationRight";
import Logo from '../assets/logo.png';
import styles from './Navigation.module.css';

const Navigation = () => {
    const navitems = ['Home', 'TV Shows', 'Movies', 'New & Popular', 'My List']

    return (
        <div className={styles.navigation}>
            <div className={styles.mainnavigation}>
                <img className={styles.logo} src={Logo} alt="" />
                <ul className={styles.navigationList}>
                    {navitems.map((item) => (
                        <li className={styles.navigationItem} key={item}>
                            <a href="/">{item}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <NavigationRight></NavigationRight>
        </div>
    );
};

export default Navigation;