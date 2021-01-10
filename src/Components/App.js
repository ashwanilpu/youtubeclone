import React from 'react';
import SearchBar from './SearhBar';
import youtube from '../apis/youtube'
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import './App.css';

class App extends React.Component{
  state={videos:[], selectedVideo: null };
  
  
  componentDidMount(){
    this.onTermSubmit('virat kholi');
  }

onTermSubmit = async (term) =>{
  console.log(term);
   const response=await youtube.get('/search',{
   params :{
     q:term
    }
 });
 this.setState({videos:response.data.items,
  selectedVideo: response.data.items[0]
});
};
onVideoSelect =(video) =>{
  this.setState({selectedVideo:video});
}
  render(){
        return(
          <div>
              <SearchBar onFormSubmit={this.onTermSubmit}/>
              <div className='wrapper'> 
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
                
              </div>
          </div>
        ); 
    }
}
 export default App;