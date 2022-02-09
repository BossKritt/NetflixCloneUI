import React from "react";

import searchicon from '../assets/search.svg';
import styles from './Search.module.css';

const Search = () => (
    <img className={styles.search} src={searchicon} alt="" />
);

export default Search;