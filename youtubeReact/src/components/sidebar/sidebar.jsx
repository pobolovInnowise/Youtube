import React from 'react';
import SidebarItem from "./sidebarItem/sidebarItem";

import babyMonitor from '../../assets/imgs/babymonitor.svg'
import aGoodAuto from '../../assets/imgs/agoodautores.svg'
import selectingHotel from '../../assets/imgs/selectingHotel.svg'
import randompic from '../../assets/imgs/randompic.svg'

import styles from './sidebar.module.css'


const Sidebar = () => {

    let nextVideos = [{
        image: babyMonitor,
        title: 'Baby Monitor Technology',
        duration: 480,  // seconds
        views: 123000,
        author: 'Dollie Blair',
    },
        {
            image: aGoodAuto,
            title: 'A Good Autoresponder',
            duration: 480,
            views:  123000,
            author: 'Dollie Blair',
        },
        {
            image: selectingHotel,
            title: 'Selecting The Right Hotel',
            duration:480,
            views: 123000,
            author: 'Dollie Blair',
        },
        {
            image: randompic,
            title: 'Random Video Title',
            duration: 480,
            views: 123000,
            author: 'Dollie Blair',
        }];

    let mobileNextVideos = [{
        image: babyMonitor,
        title: 'Baby Monitor Technology',
        duration: 456,  // seconds
        views: 123000,
        author: 'Dollie Blair',
    },
        {
            image: aGoodAuto,
            title: 'Advertising Outdoors',
            duration: 139,
            views: 330256,
            author: 'Dollie Blair',
        },];

    const mobileSideBarItems = mobileNextVideos.map((el)=> <SidebarItem  image={el.image} title={el.title}
                                                             duration={el.duration} views={el.views}
                                                             author={el.author}/>)

    const sideBarItems = nextVideos.map((el)=> <SidebarItem  image={el.image} title={el.title}
                                                                            duration={el.duration} views={el.views}
                                                                            author={el.author}/>)



    return (
        <>
            <div className={styles.sidebar}>

                <div className={styles.sidebar_header}>
                    <div className={styles.sidebar_header_left}>Next</div>
                    <div className={styles.sidebar_header_right}>
                        <p>AUTOPLAY</p>
                        <div className={styles.switch}>
                            <div className={styles.slider}></div>
                        </div>
                    </div>
                </div>
                {sideBarItems}

            </div>

            <div className={styles.mobile_sidebar}>
                <div className={styles.mobile_sidebar_header}>
                    <div className={styles.mobile_sidebar_header_left}>Next</div>
                    <div className={styles.mobile_sidebar_header_right}>
                        <p>AUTOPLAY</p>
                        <div className={styles.mobile_switch}>
                            <div className={styles.mobile_slider}></div>
                        </div>
                    </div>
                </div>
                {mobileSideBarItems}
            </div>
        </>

    );
};

export default Sidebar;