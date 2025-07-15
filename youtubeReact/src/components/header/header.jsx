import React from 'react';
import menu_svg from '../../assets/icons/menu.svg'
import ytLogo_svg from '../../assets/icons/ytLogo.svg'
import youtube_svg from '../../assets/icons/youtube.svg'
import camera_menu_svg from '../../assets/icons/camera-menu.svg'
import dots_menu_svg from '../../assets/icons/dots-menu.svg'
import bell_svg from '../../assets/icons/bell.svg'
import userpic_jpg from '../../assets/imgs/userpic.jpg'
import search_svg from '../../assets/icons/search.svg'
import threeDots from '../../assets/icons/threeDots.svg'

import styles from './header.module.css'


const Header = (props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <div className={styles.left_header}>
                    <img src={menu_svg} className={styles.menu_icon}/>
                    <img src={ytLogo_svg} className={styles.ytLogo_icon}/>
                    <img src={youtube_svg} className={styles.youtube_icon}/>
                    <input type="text" className={styles.input} placeholder="Search"/>
                </div>
                <div className={styles.right_header}>
                    <div><img src={camera_menu_svg} className={styles.camera_icon}/></div>
                    <div><img src={dots_menu_svg} className={styles.dots_menu_icon}/></div>
                    <div className={styles.bell_wrapper}>
                        <img src={bell_svg} className={styles.bell_icon}/>
                        <div className={styles.bell_number}>{props.newVideosNumber}</div>
                    </div>
                    <div><img src={userpic_jpg} className={styles.userpic}/></div>

                </div>
            </div>


            <div className={styles.mobile_header}>
                <div className={styles.mobile_ytLogo}><img src={ytLogo_svg} alt=""/></div>
                <div className={styles.mobile_youtube}><img src={youtube_svg} alt=""/></div>
                <div className={styles.mobile_search}><img src={search_svg} alt=""/></div>
                <div className={styles.mobile_threeDots}><img src={threeDots} alt=""/></div>
            </div>
        </div>

    );
};

export default Header;