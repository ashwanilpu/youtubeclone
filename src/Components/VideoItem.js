import React from 'react';
import './VideoItem.css';

const VideoItem = ({video,onVideoSelect}) => {
    return (
        <div onClick={()=>onVideoSelect(video)} className='item'>
            <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}  className='item__image'/>
    
            <div className='item__content'>
               <h4>{video.snippet.title}</h4>
            </div> 
        </div>
    )
}

export default VideoItem;
