import React from 'react';
 import MenuIcon from '@material-ui/icons/Menu';
 import SearchIcon from '@material-ui/icons/Search';
 import VideoCallIcon from '@material-ui/icons/VideoCall';
 import AppsIcon from '@material-ui/icons/Apps';
 import NotificationIcon from '@material-ui/icons/Notifications';
import { Avatar } from '@material-ui/core';
import './SearhBar.css';



class SearchBar extends React.Component{
       state={term:''};
     
   onFormSubmit= event =>{
       event.preventDefault();
       this.props.onFormSubmit(this.state.term);
   };

     render() {
         return(
            <div className='header'>
                <div className='header_left'>
                   <MenuIcon/>
                   <img  className='header_logo'
                   src='https://i.insider.com/59a59a8d79bbfd1d008b601a?width=1200&format=jpeg' alt=''/>
                </div>
                <form className='header_input' onSubmit={this.onFormSubmit}>
                    <input  placeholder='Search Videos' type='text' value={this.state.term} onChange ={  e  => this.setState( {term : e.target.value})}/>
                       <SearchIcon className='header_inputButton'/>
                </form>
                <div className='header_icons'>
                    <div ></div>
                   <VideoCallIcon className='header_icon'/>
                   <AppsIcon className='header_icon' />
                   <NotificationIcon className='header_icon'/>
                   <Avatar alt="Ash" src='https://avatars2.githubusercontent.com/u/73331636?s=460&u=e970cab1477bd12c3f6befc2fb674ba88c8b58ae&v=4'/>
                </div>
               </div>

         );
     }   
 }

 export default SearchBar;

 //https://i.insider.com/59a59a8d79bbfd1d008b601a?width=1200&format=jpeg