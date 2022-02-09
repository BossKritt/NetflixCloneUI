import React from "react";

import notificationicon from '../assets/bell.svg';
import styles from './Notifications.module.css';

const Notifications = () => (
    <img className={styles.notifications} src={notificationicon} alt="" />
);

export default Notifications;