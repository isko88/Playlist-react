import React, { ChangeEvent } from 'react';
import YouTube from '@u-wave/react-youtube';
import IState from '../types/stateType';

const Youtubeapp = ({ song, playlist }: IState) => {
  const [suggestedQuality, setSuggestedQuality] = React.useState('Select Playlist');
  interface IVideos{
    id:string,
    name:string
  }
  let videosInitialState :IVideos[] = [
        {id:"",name:""}
  ];

  

  song && song.forEach(s => videosInitialState.push({id:s.mediaUrl, name: `${s.name} ${s.artists}`}));
  videosInitialState.shift();
  // // console.log(alma,"alma")
  // const selectedPlaylist = playlist.find(p => p.id === suggestedQuality);
  // selectedPlaylist?.songs.map(songId => {
  //   const songPlaylist = song.find(s => s.id === songId);
  //   videos.push({ id: `${songPlaylist?.mediaUrl}`, name: `${songPlaylist?.name} ${songPlaylist?.artists}` })
  

  
  const hashVideoRx = /^#!\/video\/(\d)$/;
  const hash = typeof window.location !== 'undefined'
    ? window.location.hash : '';
  const defaultVideo = hashVideoRx.test(hash)
    ? parseInt(hash.replace(hashVideoRx, '$1'), 10)
    : 0;

  const [videoIndex, setVideoIndex] = React.useState(defaultVideo);
const [videosss, setVideos] = React.useState(videosInitialState)
  const [volume, setVolume] = React.useState(1);
  const [paused, setPaused] = React.useState(false);

  const video = videosss[videoIndex];


  const selectVideo = (index: any) => {
    setVideoIndex(index);
  }

  const handlePause = (event: any) => {
    setPaused(event.target.checked);
  }

  const handlePlayerPause = () => {
    setPaused(true);
  }

  const handlePlayerPlay = () => {
    setPaused(false);
  }

  const handleVolume = (event: any) => {
    setVolume(parseFloat(event.target.value));
  }
  const handlePlaylist = React.useCallback((event: ChangeEvent<HTMLDataElement>)=>{
    //  videos.push({id:songFromPlaylist?.mediaUrl, name: `${songFromPlaylist?.name} ${songFromPlaylist?.artists}`})
   
    let  handleSongsPlaylistArr :any = [];
     const selectedPlaylist = playlist.find(list=>list._id === event.target.value);
     selectedPlaylist?.songs.forEach(songId=>{
       const listSong = song.find(s=>s._id === songId);
       handleSongsPlaylistArr.push({id:listSong?.mediaUrl, name: `${listSong?.name} ${listSong?.artists}`})
     })
     setSuggestedQuality(event.target.value);
     setVideos(handleSongsPlaylistArr);
     console.log(handleSongsPlaylistArr);
     
     
  },[setSuggestedQuality])


  return (
    <div className="row">
      <div className="col s4">
        <div className="collection">
          {videosss.map((choice, index) => (
            <a
              key={`${choice.id}`}
              href={`#!/video/${index}`}
              className={`collection-item ${video === choice ? 'active' : ''}`}
              onClick={() => selectVideo(index)}
            >
              {choice.name}
            </a>
          ))}
        </div>
        <h5>
          Paused
      </h5>
        <p>
          <label htmlFor="paused">
            <input
              type="checkbox"
              id="paused"
              checked={paused}
              onChange={handlePause}
            />
            <span>Paused</span>
          </label>
        </p>
        <h5>
          Volume
      </h5>
        <input
          type="range"
          value={volume}
          min={0}
          max={1}
          step={0.01}
          onChange={handleVolume}
        />
        <h5>
          Playlists
      </h5>
        <select className="browser-default" onChange={handlePlaylist} defaultValue={'DEFAULT'}>
          <option value="DEFAULT" disabled >Select Playlist...</option>

          {playlist && playlist.map((listname,idx) => (
            
            <option key={`${listname._id}`} value={`${listname._id}`}>
              {listname.name}
            </option>
          ))}
        </select>
      </div>
      <div className="col s8 center-align">
        <YouTube
          video={video && video.id}
          width={640}
          height={480}
          autoplay
          controls={false}
          suggestedQuality={suggestedQuality}
          volume={volume}
          paused={paused}
          onPause={handlePlayerPause}
          onPlaying={handlePlayerPlay}
        />
      </div>
    </div>
  );
}
export default Youtubeapp;