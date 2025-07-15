import React from 'react';
import styles from './channelDescription.module.css'
import channel_pic from '../../../assets/imgs/channel_description_pic.svg'

const ChannelDescription = () => {
    return (

        <>
            <div className={styles.channel_description}>
            <div className={styles.channel_description_left}>
                <img src={channel_pic} className={styles.channel_description_pic} alt=""/>

                <div className={styles.channel_description_text}>
                    <div className={styles.channel_description_text_name}>Food & Drink</div>
                    <div className={styles.channel_description_text_published}>Published on 14 Jun 2019</div>
                    <div className={styles.channel_description_text_water}>A successful marketing plan relies heavily on
                        the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must
                        appeal to, entice, and convince consumers to take action. There is no magic formula to write
                        perfect ad copy; it is based on a number of factors, including ad placement, demographic, even
                        the consumer’s mood when they see your ad.
                    </div>
                    <div className={styles.channel_description_text_show_more}>Show more</div>
                </div>
            </div>

            <div className={styles.channel_description_subscribe_button}>
                Subscribe 2.3m
            </div>

        </div>

            <div className={styles.mobile_channel_description}>
                <div className={styles.mobile_channel_description_elements}>
                    <img src={channel_pic} className={styles.mobile_channel_description_pic} alt=""/>
                    <div className={styles.mobile_channel_description_text}>
                        <div className={styles.mobile_channel_description_text_name}>Food & Drink</div>
                        <div className={styles.mobile_channel_description_text_published}>245K subscribed</div>
                    </div>
                    <div className={styles.mobile_channel_description_subscribe_button}>
                        Subscribe
                    </div>
                </div>

            </div>
        </>

    );
};

export default ChannelDescription;