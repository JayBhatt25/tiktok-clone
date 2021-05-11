import React, { useRef, useState } from 'react'
import './Video.css'
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';


function Video({url, channel, description, song, likes, mssgs, shares}) {
    const vidRef = useRef(null);
    const [playing, setPlaying] = useState(false);

    const handleVideoClick = () => {
        if(playing){
            vidRef.current.pause();
            setPlaying(false);
        } else {
            vidRef.current.play();
            setPlaying(true);
        }
    }
    return (
        <div className='video'>
            
            <img className='tiktok__logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXVXInCQ5B0ol43YM8Co51pG3PjB_tvCbMeQ&usqp=CAU'>
            
            </img>
            <video 
             onClick={handleVideoClick}
             ref={vidRef}
            className='video__player' 
            loop
            src={url}
            >
            
            </video>
            <VideoFooter channel={channel} description={description} song={song} />
            <VideoSidebar likes={likes} mssgs={mssgs} shares={shares} />
        </div>
    )
}

export default Video
