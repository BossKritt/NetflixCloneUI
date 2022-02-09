import React from "react";

import Facebookicon from '../assets/facebook.svg';
import Instagramicon from '../assets/Instagram.svg';
import Twittericon from '../assets/twitter.svg';
import Youtubeicon from '../assets/youtube.svg';
import styles from './SocialLinks.module.css';

const SocialLinks = () => {
    return (
        <div className={styles.box}>
            <div className={styles.iconLink}>
                <a href="https://www.facebook.com/NetflixTH/" target='_blank'>
                    <img className={styles.logoIcon} src={Facebookicon} alt="" />
                </a>
            </div>
            <div className={styles.iconLink}>
                <a href="https://www.instagram.com/netflixasia/" target='_blank'>
                    <img className={styles.logoIcon} src={Instagramicon} alt="" />
                </a>
            </div>
            <div className={styles.iconLink}>
                <a href="https://twitter.com/NetflixAsia" target='_blank'>
                    <img className={styles.logoIcon} src={Twittericon} alt="" />
                </a>
            </div>
            <div className={styles.iconLink}>
                <a href="https://www.youtube.com/channel/UCZoC-XeDO7HxbAdeCaRPPCw/videos" target='_black'>
                    <img className={styles.logoIcon} src={Youtubeicon} alt="" />
                </a>
            </div>
        </div>
    );
};

export default SocialLinks