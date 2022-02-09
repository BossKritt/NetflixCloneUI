import React from "react";

import ThumbnailImg1 from '../assets/recent6.jpeg'
import ThumbnailImg2 from '../assets/mylist1.jpeg'
import ThumbnailImg3 from '../assets/mylist2.jpeg'
import ThumbnailImg4 from '../assets/mylist3.jpeg'
import RightIcon from '../assets/right-icon.svg';

import styles from './Segment3.module.css';

const Segment3 = ({ title }) => {
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
                {/* <button className={styles.button}>
                    <img src={RightIcon} alt="" />
                </button> */}
            </div>
        </div>
    );
};

export default Segment3;