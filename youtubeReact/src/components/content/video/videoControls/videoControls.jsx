import React from 'react';
import pauze_svg from '../../../../assets/icons/Pause.svg'
import next_svg from '../../../../assets/icons/Next.svg'
import volume_svg from '../../../../assets/icons/Volume.svg'
import volumeGray_svg from '../../../../assets/icons/RectangleVolumeGray.svg'
import volumeWhite_svg from '../../../../assets/icons/RectangleVolumeWhite.svg'
import subtitles_svg from '../../../../assets/icons/Subtitles.svg'
import settings_svg from '../../../../assets/icons/SettingsVideo.svg'
import sizeVideo_svg from '../../../../assets/icons/SizeVideo.svg'
import fullScreen_svg from '../../../../assets/icons/FullScreenVideo.svg'
import progressGray_svg from '../../../../assets/icons/ProgressGray.svg'
import progressRed_svg from '../../../../assets/icons/progressRedBar.svg'

import mobileProgressRed from '../../../../assets/imgs/mobileProgressRed.svg'
import mobileProgressGray from '../../../../assets/imgs/mobileProgressGray.svg'
import mobileBackground from '../../../../assets/imgs/progressBackground.svg'



import styles from './videoContols.module.css'


const VideoControls = ({video_controls, mobile_video_controls}) => {
    return (
        <>
            <div className={video_controls}>

                <div className={styles.controls}>
                    <div className={styles.time}>
                        <div>1:34</div>
                        <div>19:00</div>
                    </div>
                    <div className={styles.progress}>
                        <div className={styles.progressGray}><img src={progressGray_svg} alt=""/></div>
                        <div className={styles.progressRed}><img src={progressRed_svg} alt=""/></div>
                    </div>
                    <div className={styles.control_buttons}>
                        <div className={styles.control_buttons_left}>
                            <div><img src={pauze_svg} alt=""/></div>
                            <div><img src={next_svg} alt=""/></div>
                            <div className={styles.volume}>
                                <div><img src={volume_svg} alt=""/></div>
                                <div className={styles.volumeBar}>
                                    <div className={styles.volumeGray}><img src={volumeGray_svg} alt=""/></div>
                                    <div><img src={volumeWhite_svg} alt=""/></div>
                                </div>

                            </div>

                        </div>
                        <div className={styles.control_buttons_right}>
                            <div><img src={subtitles_svg} alt=""/></div>
                            <div><img src={settings_svg} alt=""/></div>
                            <div><img src={sizeVideo_svg} alt=""/></div>
                            <div><img src={fullScreen_svg} alt=""/></div>
                        </div>

                    </div>
                </div>
            </div>

            <div className={mobile_video_controls}>

                <div className={styles.mobile_controls}>
                    <div className={styles.mobile_background}><img src={mobileBackground} alt=""/></div>
                    <div className={styles.mobile_controls_icons}>
                        <div className={styles.mobile_pause}><img src={pauze_svg} alt=""/></div>
                        <div className={styles.mobile_time_left}>1:34</div>
                        <div className={styles.mobile_progress}>
                            <div  className={styles.mobile_progress_gray}><img src={mobileProgressGray} alt=""/></div>
                            <div className={styles.mobile_progress_red}><img src={mobileProgressRed} alt=""/></div>
                        </div>
                        <div className={styles.mobile_time_right}>-19:00</div>
                        <div className={styles.mobile_volume}><img src={volume_svg} alt=""/></div>
                    </div>
                </div>

            </div>


        </>







    );
};

export default VideoControls;