
import './App.css';
import Video from './Video';
import axios from './axios'
import { useEffect, useState } from 'react';

function App() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    async function fetchPosts(){
      const response = await axios.get("/v2/posts");
      setVideos(response.data);

      return response;
    }  

    fetchPosts();

  },[])

  console.log(videos);
  return (
    <div className="app">
      <div className='app__videos'>

        {videos.map( (video) => (
          <Video 
          url={video.url} 
          channel={video.channel} 
          description={video.description} 
          song={video.song} 
          likes={Number(video.likes)} 
          mssgs={Number(video.mssgs)} 
          shares={Number(video.shares)} />
        ))}
      </div>

    </div>
  );
}

export default App;
