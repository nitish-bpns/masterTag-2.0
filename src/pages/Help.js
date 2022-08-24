import React from 'react'
import Navbar from '../components/Navbar';
import styles from '../styles/Help.module.css'
import img1 from './h/help.webp'
function Help() {
    return (
        <div>
            <Navbar />
<p className={styles.test}>testing</p>
            Help
<div className={styles.Help}>
<img src={img1}/>;
</div>
<div className={styles.Helptext}>
    Browse Our Topics
</div>










        </div>
    )
}

export default Help;