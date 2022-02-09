import React from "react";

import ThumbnailImg1 from '../assets/pop1.jpeg'
import ThumbnailImg2 from '../assets/recent7.jpeg'
import ThumbnailImg3 from '../assets/pop2.jpeg'
import ThumbnailImg4 from '../assets/pop3.jpeg'
import ThumbnailImg5 from '../assets/pop4.jpeg'
import ThumbnailImg6 from '../assets/pop5.jpeg'
import ThumbnailImg7 from '../assets/pop6.jpeg'
import RightIcon from '../assets/right-icon.svg';

import styles from './Segment4.module.css';

const Segment4 = ({ title }) => {
    return (
        <div className={styles.segment}>
            <p className={styles.title}>
                {title}
                <span className={styles.icon}>
                    <img className={styles.titleicontext} src={RightIcon} alt="" />
                </span>
            </p>
            <div className={styles.row}>
                <img src={ThumbnailImg1} alt="" />
                <img src={ThumbnailImg2} alt="" />
                <img src={ThumbnailImg3} alt="" />
                <img src={ThumbnailImg4} alt="" />
                <img src={ThumbnailImg5} alt="" />
                <img src={ThumbnailImg6} alt="" />
                <img src={ThumbnailImg7} alt="" />
                <button className={styles.button}>
                    <img src={RightIcon} alt="" />
                </button>
            </div>
        </div>
    );
};

export default Segment4;