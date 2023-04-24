import React, { useEffect } from "react";
import axios from "axios";
const userLogin = (username, password) => {
  return new Promise ((resolve, reject) => {
    let object = {
      email: username,
      password: password
    }
    axios.post('http://localhost:4000/authentication/login', object).then(res => {
      // console.log(res)
      resolve(res)
    }).catch(err => {
      console.log(err)
      reject(false)
    })
  })
 

}

export default userLogin;