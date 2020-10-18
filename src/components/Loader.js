import React, {useEffect} from 'react';
import styles from './../styles/loader.module.css';

const Loader = ({
}) => {
    useEffect(() => {
        document.querySelector('body').style.overflow = 'hidden';
        return () => {
            document.querySelector('body').style.overflow = 'auto';
        }
    });
    return (
        <div className={styles.loader}>
            <img src='https://media.giphy.com/media/tXLpxypfSXvUc/giphy.gif' />
        </div>
    )
}

export default Loader;