import React from 'react';
import './VideoDetail.css';

const VideoDetail = ({video}) => {
    if(!video){
        return <div>Loading...</div>;
    }
    const videosrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
        <div className='video'>
            <div className='video_player'>
              <iframe title='video player' src={videosrc} />
            </div>
          <div className='video_title'><h4>{video.snippet.title}</h4></div>
    </div>
    );
};

export default VideoDetail;
  