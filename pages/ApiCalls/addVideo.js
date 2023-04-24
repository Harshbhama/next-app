import React, { useEffect } from "react";
import axios from "axios";
const addVideo = (videoName) => {
  
  const userNameToken = localStorage.getItem("username");
  console.log(userNameToken)
  const body = {
    videoName: videoName
  }
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: 'http://localhost:4000/video/addVideo',
      headers: {'Authorization': userNameToken},
      data: body
    }).then((res) => {
      console.log(res)
    }).catch((err) =>{
      console.log(err)
    })
  })
}

export default addVideo;