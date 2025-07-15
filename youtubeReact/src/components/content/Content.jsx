import React from 'react';
import Video from "./video/video";
import ChannelDescription from "./channelDescription/channelDescription";

const Content = () => {

    // const videoData = {
    //     image: null
    //     title: null,
    //     duration: null,
    //     currentTime: null,
    //     views: 123125,
    //     likes: "123k",
    //     dislikes: "435k",
    //     subscribed: "2.3mln"
    // }
    //
    // const videoDescriptionData = {
    //     title: "Food & Drink",
    //     publishedDate: "Published on 14 Jun 2019",
    //     text: "bla bla",
    // }

    return (
        <div className='content'>
            <Video/>
            <ChannelDescription/>
        </div>
    );
};

export default Content;