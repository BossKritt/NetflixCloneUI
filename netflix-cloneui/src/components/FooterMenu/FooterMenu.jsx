import React from "react";

import styles from './FooterMenu.module.css';

const FooterMenu = () => {
    const menu = [
        'Audio and Subtitles',
        'Audio Description',
        'Help Center',
        'Gift Cards',
        'Media Center',
        'Investor Relations',
        'Jobs',
        'Terms of Use',
        'Privacy',
        'Legal Notices',
        'Cookie Preferances',
        'Corporate Information',
        'Contact Us'
    ];

    return (
        <ul className={styles.menuList}>
            {menu.map(link => (
                <li className={styles.link} key={link}>
                    <a href="/">{link}</a>
                </li>
            ))}
        </ul>
    );
};

export default FooterMenu