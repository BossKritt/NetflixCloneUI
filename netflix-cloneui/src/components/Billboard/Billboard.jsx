import React from "react";

import BillboardTitle from '../assets/billboard-title.png';
import BillboardImg from '../assets/billboard-img.jpeg';
import PlayIcon from '../assets/play.svg';
import InfoIcon from '../assets/info.svg';
import styles from './Billboard.module.css';

const Billboard = () => {
    return (
        <div className={styles.billboard}>
            <div className={styles.innerBillboard}>
                <img src={BillboardImg} alt="" />
                <div className={styles.fade}></div>
                <div className={styles.info}>
                    <img src={BillboardTitle} alt="" />
                    <div className={styles.description}>
                    As a grisly virus rampages a city, a lone man stays locked inside his apartment, digitally cut off from seeking help and desperate to find a way out.
                    </div>
                    <div className={styles.button}>
                        <a href="">
                            <img className={styles.icon} src={PlayIcon} alt="" />
                            <span>Play</span>
                        </a>
                        <button>
                            <img className={styles.infoicon} src={InfoIcon} alt="" />
                            <span>More Info</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Billboard;