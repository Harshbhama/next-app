import React from "react";
import axios from "axios";
const getVideos = () => {
  const userNameToken = localStorage.getItem("username");
  console.log(JSON.parse(userNameToken))
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: 'http://localhost:4000/video/listVideo',
      headers: {'Authorization': JSON.parse(userNameToken).token}
    }).then((res) => {
      // console.log(res)
      resolve(res)
    }).catch((err) =>{
      reject(err)
    })
  })
}
export default getVideos;