import React from 'react';
import styles from './sidebarItem.module.css'

const SidebarItem = (props) => {

    const tranformDurationtoString = (sec)=> {

       let rest_of_seconds = sec;
        const M = Math.trunc(rest_of_seconds/60);
        rest_of_seconds = rest_of_seconds - M*60;
        let zeroString = ""
        if(rest_of_seconds<10)zeroString="0";
        const res = `${M}:${zeroString}${rest_of_seconds}`
        return res;
    }

    return (

        <>
            <div className={styles.recommended_item}>
            <div className={styles.recommended_item_picture}><img src={props.image} alt=""/>
                <div className={styles.recommended_item_duration}>
                    <p>{tranformDurationtoString(props.duration)}</p>
                </div>
            </div>
            <div className={styles.recommended_item_name}>{props.title}</div>
            <div className={styles.recommended_item_details}>
                <div><p>{`${Math.trunc(props.views / 1000)}k views`}</p></div>
                <div>{props.author}</div>
            </div>
        </div>

            <div className={styles.mobile_item}>
                <div className={styles.mobile_item_picture}><img src={props.image} alt=""/>
                    <div className={styles.mobile_item_duration}>
                        <p>{tranformDurationtoString(props.duration)}</p>
                    </div>
                </div>

                    <div className={styles.mobile_item_name}>{props.title}</div>

                    <div className={styles.mobile_item_details}>
                    <div><p>{`${Math.trunc(props.views / 1000)}k views`}</p></div>
                    <div>{props.author}</div>
                </div>
            </div>
        </>



    );
};

export default SidebarItem;