import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavFoot.css'

function Navbar() {
    return (
        <div>
            <ul className={styles.nav}>
                <Link to='/how'>
                    <li>
                        How it works
                    </li>
                </Link>
                <Link to='/shop'>
                    <li>
                        Shop
                    </li>
                </Link>
                <Link to='/help'>
                    <li>
                        Help
                    </li>
                </Link>
            </ul>

        </div>
    )
}

export default Navbar;