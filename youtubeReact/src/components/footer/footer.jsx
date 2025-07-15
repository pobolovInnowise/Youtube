import React from 'react';
import homeBlack from '../../assets/imgs/homeBlack.svg'
import trending from '../../assets/imgs/trending.svg'
import subscriptions from '../../assets/imgs/subscriptions.svg'
import library from '../../assets/imgs/library.svg'
import styles from './footer.module.css'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footer_elements}>
                <div className={styles.footer_item}>
                    <img src={homeBlack} alt="" />
                    <span className={styles.footer_home_text}>Home</span>
                </div>
                <div className={styles.footer_item}>
                    <img src={trending} alt="" />
                    <span className={styles.footer_trending_text}>Trending</span>
                </div>
                <div className={styles.footer_item}>
                    <img src={subscriptions} alt="Subscriptions icon" />
                    <span className={styles.footer_subscriptions_text}>Subscriptions</span>
                </div>
                <div className={styles.footer_item}>
                    <img src={library} alt="" />
                    <span className={styles.footer_library_text}>Library</span>
                </div>
            </div>
        </div>



    );
};

export default Footer;