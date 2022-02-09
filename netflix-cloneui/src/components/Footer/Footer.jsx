import React from "react";
import SocialLinks from "../SocialLinks";
import FooterMenu from "../FooterMenu";

import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.box}>
            <div>
                <SocialLinks></SocialLinks>
            </div>
            <FooterMenu></FooterMenu>
        </footer>
    );
};

export default Footer