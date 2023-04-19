import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { Link } from "react-router-dom";
import RegCss from "./Registration.module.css";
import { userData } from "../../locaStorage/localStorage";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Registration() {
  const [local, setLocal] = useRecoilState(userData);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitButton,setSubmitButton]=useState(false)
  function submitToLocal() {
    if (fname == "" && lname == "" && email == "" && password == "") {
      const newData = [...local];
      setLocal(newData);
      localStorage.setItem("users", JSON.stringify(newData));
      alert("No data entered Redirected to Login Page");
    } else {
      const newData = [...local, { fname, lname, email, password }];
      setLocal(newData);
      localStorage.setItem("users", JSON.stringify(newData));
      setSubmitButton(!submitButton)
      alert('Registration successful Click on Go to Login Button')
    }
  }
  function handleSubmitButton(){
   
    setSubmitButton(false)
    alert('Enter the details same details in the login fields')
  }
function handleName(e){
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(regex.test(e.target.value)){
      alert('vagasdg')
  }
}
  return (
    <form action="submit" className={RegCss.div}>
      <TextField
        type="text"
        sx={{ width: "25ch" }}
        id="outlined-basic"
        label="First Name"
        variant="outlined"
        // onChange={(e) => {
        //   setFname(e.target.value);
        // }}
        onChange={handleName}
      />
      <TextField
        sx={{ width: "25ch" }}
        id="outlined-basic"
        label="Last Name"
        variant="outlined"
        onChange={(e) => {
          setLname(e.target.value);
        }}
      />
      <TextField
        sx={{ width: "25ch" }}
        id="outlined-basic"
        type="email"
        label="E-mail"
        variant="outlined"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <TextField
        sx={{ width: "25ch" }}
        id="outlined-basic"
        type="password"
        label="Password"
        variant="outlined"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      {submitButton?<Button sx={{ width: "28ch" }} variant="outlined" onClick={handleSubmitButton} ><Link to={'/'}>Go to Login Page</Link></Button>:<Button sx={{ width: "28ch" }} variant="outlined" onClick={submitToLocal}>CLick</Button>}
    </form>
  );
}
{
 
}
export default Registration;
