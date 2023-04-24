import React, { useEffect, useState } from "react";
import addVideo from "./ApiCalls/addVideo";
import getVideos from "./ApiCalls/getVideos";
const LandingPage = () => {
  const [videoName, setVideoName] = useState("");
  const [videos, setVideos] = useState([])
  const addVideoFunc = () => {
    addVideo(videoName)
  }
  const showVideo = (video) => {
    console.log(video)
  }
  useEffect(() => {
    getVideos().then(res => {
      if (!res.data.error) {
        console.log(res.data.data)
        setVideos(res.data.data)
      }
      // setVideos()
    }).catch(err => {
      console.log(err)
    })

  }, [])
  return (
    <div>
      <input type='text' value={videoName} onChange={(e) => setVideoName(e.target.value)} />
      {!!videos &&
        <div className="videos-list">
          {videos.map((video, index) => {
            return (
              <div style={{display: 'flex', flexDirection: 'row', gap: '20px'}}>
                <p>{video?.videoName}</p>
                <button onClick={() => showVideo(video?.videoName)}>Show Video</button>
              </div>
            )
          })}
        </div>
      }
      <button onClick={addVideoFunc}>Add Video</button>
    </div>
  )
}
export default LandingPage;