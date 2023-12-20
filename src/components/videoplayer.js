import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import './videoplayer.css';

const VideoPlayer = ({ videos }) => {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    const handleVideoEnd = () => {
        console.log('video ended')
        if (currentVideoIndex < videos.length - 1) {
            setCurrentVideoIndex(currentVideoIndex + 1);
        } else {
            // All videos have played, you can add any logic here.
        }
    };

    useEffect(() => {
        // Optionally, you can add logic to do something when the component mounts.
    }, []);

    return (
        <div className="right">

            <div className="right-container">
                <div id="video-container">
                    <ReactPlayer
                        url={videos[currentVideoIndex].url}
                        muted
                        playing
                        onEnded={handleVideoEnd}
                        width="100%"
                        height="auto"
                    />
                </div>
                <div className="description">
                    <div className="content">
                        {videos[currentVideoIndex].description}
                    </div>
                </div>

            </div>



        </div>
    );
};

export default VideoPlayer;
