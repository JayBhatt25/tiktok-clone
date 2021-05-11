import React from 'react'
import './VideoFooter.css'
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from 'react-ticker'

function VideoFooter({channel, description, song}) {
    return (
        <div className='videoFooter'>
            <div className='videoFooter__text'>
                <h3>@{channel}</h3>
                <p>{description}</p>
                
                <div className='videoFooter__ticker'>
                    
                    <MusicNoteIcon className='videoFooter__icon' />
                    <Ticker mode='smooth'>
                        {({index}) => (
                            <>
                                <p>{song}</p>
                            </>
                        )}

                    </Ticker>


                </div>

            </div>
            <img 
            className='videoFooter__record' 
            src='https://i2.wp.com/www.furnacemfg.com/wp-content/uploads/2015/02/vinyl-red.png?fit=350%2C350&ssl=1'>

            </img>
        </div>
    )
}

export default VideoFooter
