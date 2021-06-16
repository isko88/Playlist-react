
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPlaylists } from './actions/studentActions';
import { getSongs } from './actions/songActions';
import './App.css';
import Youtubeapp from './components/Youtubeapp';
import IState from './types/stateType';

const App:React.FC = ()=> {
  const dispatch = useDispatch();
  const {song} = useSelector((state:IState) => state)
  const {playlist}  = useSelector((state:IState) => state)
  useEffect(() => {
    getSongs()(dispatch)
    getPlaylists()(dispatch)
  }, [dispatch])
  return (
    <div className="App">
      {(song[0]._id && playlist[0]._id) ? (<Youtubeapp song={song[0]._id && song} playlist={playlist[0]._id && playlist}/>):"Loading"}
     
    </div>
  );
}

export default App;
