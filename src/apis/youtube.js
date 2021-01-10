import axios from 'axios';

const KEY ='AIzaSyCpvJstqwYyQqiKiRblz3XyqMqCKiuh-lY';


export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params : {
        part : 'snippet',
        maxResults : 10,
        key: KEY
    }
});