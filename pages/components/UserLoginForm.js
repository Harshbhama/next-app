import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const UserLoginForm = (props) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const onLogin = () => {

    console.log("userName",userName);
    console.log("password",password);
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