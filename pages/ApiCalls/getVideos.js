import React from "react";
import axios from "axios";
const getVideos = () => {
  const userNameToken = localStorage.getItem("username");
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: 'http://localhost:4000/video/listVideo',
      headers: {'Authorization': userNameToken}
    }).then((res) => {
      // console.log(res)
      resolve(res)
    }).catch((err) =>{
      reject(err)
    })
  })
}
export default getVideos;