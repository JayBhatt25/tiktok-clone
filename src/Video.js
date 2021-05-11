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
