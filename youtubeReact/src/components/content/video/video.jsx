import React from 'react';
import main_video from "../../../assets/imgs/main_video.svg";
import VideoControls from "./videoControls/videoControls";
import styles from './video.module.css';
import VideoTitle from "./videoTitle/videoTitle";
import mobile_main_video from '../../../assets/imgs/mobile_main_video.svg'

const Video = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.video}>
                <div className={styles.video_image_container}>
                    <img src={main_video} alt=""/>
                    <VideoControls video_controls={styles.video_controls}/>
                </div>
                <VideoTitle className={styles.video_title}/>
                <div className={styles.separator}></div>
            </div>

            <div className={styles.mobile_video}>
                <div className={styles.mobile_video}>
                    <div className={styles.mobile_video_image_container}>
                        <img src={mobile_main_video} alt=""/>
                        <VideoControls mobile_video_controls={styles.mobile_video_controls}/>
                    </div>
                    <VideoTitle className={styles.video_title}/>
                    <div className={styles.separator}></div>
                </div>
            </div>
        </div>


    );
};

export default Video;
