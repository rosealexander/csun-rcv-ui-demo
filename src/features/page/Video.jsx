import ReactHlsPlayer from 'react-hls-player';
import {memo, useRef} from "react";
import {getManifestUrl} from '../../api'

const Video = memo(({sid}) => {
  const playerRef = useRef()

  const manifest = getManifestUrl(sid)

  return (
    <ReactHlsPlayer
      playerRef={playerRef}
      src={manifest}
      autoPlay={true}
      controls={true}
      width="100%"
      height="auto"
      hlsConfig={{
        debug: false,
        maxBufferLength: 30,
        enableWorker: true
      }}
      muted
    />
  )
})

export default Video
