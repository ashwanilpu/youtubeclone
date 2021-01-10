import React from 'react'
import VideoItem from './VideoItem';
import './VideoList.css';

const VideoList = ({videos, onVideoSelect}) => {
    
   const renderList = videos.map((video)=>{
          return <VideoItem  key={video.id.videoId} video={video} onVideoSelect={onVideoSelect}/>;
    });
    
    return (
        <div className='container'>
            {renderList}
        </div>
    )
}

export default VideoList
