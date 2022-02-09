import React from "react";

import Segment from '../Segment';
import Segment2 from '../Segment2';
import Segment3 from '../Segment3';
import Segment4 from '../Segment4';

import styles from './Titles.module.css';

const Titles = () => {
    return (
        <div className={styles.titles}>
            <Segment title='Recently Added'></Segment>
            <Segment2 title='Trending Now'></Segment2>
            <Segment3 title='My List'></Segment3>
            <Segment4 title='Popular on Netflix'></Segment4>
        </div>
    );
};

export default Titles;