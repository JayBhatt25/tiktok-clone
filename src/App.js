
import './App.css';
import Video from './Video';

function App() {
  return (
    <div className="app">
      <div className='app__videos'>
        <Video 
        url='https://assets.mixkit.co/videos/preview/mixkit-dog-catches-a-ball-in-a-river-1494-large.mp4' 
        channel='prisonmike' description='Just another awesome dog video' song='fireflies (Remix)' likes={110} mssgs={20} shares={12} />
        
        <Video 
        url='https://images.all-free-download.com/footage_preview/mp4/beach_sunset_ocean_twilight_652.mp4' 
        channel='prisonmike' description='Just another awesome dog video' song='fireflies (Remix)' likes={110} mssgs={20} shares={12} />
       
      </div>

    </div>
  );
}

export default App;
