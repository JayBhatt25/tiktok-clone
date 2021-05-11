import React, { useState } from 'react'
import './VideoSidebar.css'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatIcon from '@material-ui/icons/Chat';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';

function VideoSidebar({likes, mssgs, shares}) {
    const [liked, setLiked] = useState(false);

    return (
        <div className='videoSidebar'>
            <div className='videoSidebar__button'>
                {!liked ? (<FavoriteBorderIcon onClick = {e => { setLiked(true)}} fontSize='large' />) 
                : (<FavoriteIcon onClick = {e => { setLiked(false)}} fontSize='large' />)
                }
                
               <p>{!liked ? likes : likes + 1 }</p>

            </div>
            <div className='videoSidebar__button'>
                <ChatIcon fontSize='large' />
                <p>{mssgs}</p>
            </div>
            <div className='videoSidebar__button'>
                <ShareIcon fontSize='large' />
                <p>{shares}</p>
            </div>
        </div>
    )
}

export default VideoSidebar
