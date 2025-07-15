import React from 'react';
import styles from './videoTitle.module.css'
import threeDots from '../../../../assets/icons/More.svg'
import likes from '../../../../assets/icons/likes.svg'
import dislikes from '../../../../assets/icons/dislikes.svg'
import share from '../../../../assets/icons/share.svg'
import arrowDown from '../../../../assets/icons/arrowDown.svg'


const VideoTitle = () => {
    return (
        <>
            <div className={styles.video_title}>
            <div className={styles.video_title_name}>
                Dude You Re Getting A Telescope
            </div>
            <div className={styles.video_title_stats}>
                <div className={styles.video_title_stats_views}>
                    123k views
                </div>
                <div className={styles.video_title_stats_buttons}>
                    <div className={styles.likes}><img src={likes} alt=""/> <p>123k</p></div>
                    <div className={styles.dislikes}><img src={dislikes} alt=""/> <p>435k</p></div>
                    <div className={styles.share}><img src={share} alt=""/> <p>Share</p></div>
                    <div className={styles.three_dots}><img src={threeDots} alt=""/></div>
                </div>
            </div>
        </div>

            <div className={styles.mobile_video_title}>
                <div className={styles.mobile_video_title_top}>
                    <div className={styles.mobile_video_title_name}>
                        Dude You Re Getting A Telescope
                    </div>
                    <div>
                        <img src={arrowDown} alt=""/>
                    </div>
                </div>

                <div className={styles.mobile_video_title_stats}>
                    <div className={styles.mobile_video_title_stats_views}>
                        123k views
                    </div>
                    <div className={styles.mobile_video_title_stats_buttons}>
                        <div className={styles.mobile_likes}><img src={likes} alt=""/> <p>123k</p></div>
                        <div className={styles.mobile_dislikes}><img src={dislikes} alt=""/> <p>435k</p></div>
                        <div className={styles.mobile_share}><img src={share} alt=""/> <p>Share</p></div>
                    </div>
                </div>
            </div>

        </>

    );
};

export default VideoTitle;