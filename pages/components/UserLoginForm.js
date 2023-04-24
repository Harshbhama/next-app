import React, {useState, useRef} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import userLogin from '../ApiCalls/userLogin';
import { useRouter } from 'next/navigation';

const UserLoginForm = (props) => {
  const router = useRouter();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const ref = useRef(null);
  const onLogin = async (e) => {
    let user = await userLogin(userName, password);
    console.log(user?.data?.data?.token)
    localStorage.setItem("username", user?.data?.data?.token)
    if(!user?.data?.error){
      router.push('/landing-page')
    }
  }
  const handleInput = (e, value) => {
    if(value === "Username"){
      setUserName(e.target.value)
    }else{
      setPassword(e.target.value)
    }
  }
  return(
   <div>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      
    >
      <div>
        <TextField
          required
          id="standard-required"
          label="Username"
          onChange={(e) => handleInput(e, 'Username')}
          variant="standard"
        />
         <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
          onChange={(e) => handleInput(e, 'Password')}
        />
        <Button variant="text" onClick={onLogin}>Text</Button>
      </div>
    </Box>
   </div>
  )
} 
export default UserLoginForm;