import React from "react";

import Profile from '../assets/profile.png';
import styles from './User.module.css';

const User = () => {
    return (
        <img className={styles.profile} src={Profile} alt="" />
    )
}

export default User;