import React, { useRef, useState } from 'react'
import './Video.css'


function Video() {
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
            src='https://assets.mixkit.co/videos/preview/mixkit-dog-catches-a-ball-in-a-river-1494-large.mp4'
            >

            </video>
           {/* <iframe 
           onClick={handleVideoClick}
           ref={vidRef}
           className='video__player' 
           width="500" 
           height="800" 
           src="./dogvid.mp4" 
           title="YouTube video player" 
           frameborder="0" 
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" >

           </iframe> */}
        </div>
    )
}

export default Video
