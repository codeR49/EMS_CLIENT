import React, { useState } from 'react'
import { Routes, useNavigate } from 'react-router-dom';
import { Grid, Paper, TextField, Button } from '@material-ui/core'
import DevelopmentUrl from '../../data/api';
import Axios from 'axios';
import jwt_decode from "jwt-decode";
import imglogo from '../../image/logo.png'

import "../Signin/Signin.css";

import { useAuth } from '../../Component/Utils/Auth';
import EyeIcon from '../../Component/EyeIcon/EyeIcon';

const Signin = () => {
    const auth = useAuth()

    const paperStyle = { padding: 20, height: '60vh', width: 350 }

    const btnstyle = { margin: '30px 0', color: "white" }
    const txtstyle = { margin: "10px 0" }
    const signintxtStyle = { marginTop: "40px" }
    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');
    let [errorMessage, setErrorMessage] = useState("");
    const [isPasswordShow, setIsPasswordShow] = useState(false);

    let message = <h5>Not Logged in</h5>;
    let navigate = useNavigate();
    let onchangeusernamehandler = (event) => {
        setUsername(event.target.value);
    }
    let onchangepasswordhandler = (event) => {
        setPassword(event.target.value);
    }


    let submithandler = (event) => {
        event.preventDefault();
        let formdata = {
            username: username,
            password: password
        };
        Axios.post(DevelopmentUrl + '/users/login', formdata).then(
            (res) => {
                let { token } = res.data;

                localStorage.setItem('token', token);

                if (res.status === 200) {
                    let roles = jwt_decode(localStorage.getItem("token")).roles;
                    let name = jwt_decode(localStorage.getItem("token")).name;
                    let location = jwt_decode(localStorage.getItem("token")).location;                    ;
                    localStorage.setItem("roles", roles);
                    localStorage.setItem("name", name);
                    localStorage.setItem("location", location);
                    auth.login()
                    message =
                        <Routes>

                            {roles === "Director" ? navigate("/director/viewdata", { replace: true }): roles === "Remote Engineer"? navigate("/engineer/form", { replace: true }): navigate("/gm/viewdata", { replace: true })}
                        </Routes>


                    return message;

                }
            }
        ).catch(error => {
            console.log("error occured")
            console.log(error.data)
            setErrorMessage("Enter valid Username and Password");
        })
    }
    const toggleIsPasswordShowValue = () => {
        setIsPasswordShow(!isPasswordShow);
    };
    return (
        <div className='' style={{ width: "100%" }} >

            <div className='logoimg'>
                <img src={imglogo} alt="logo" />
            </div>
            <div className='maindivimag'>

                <div className='login'>
                    <form onSubmit={submithandler} className=''>
                        <Grid >
                            <Paper elevation={10} style={paperStyle} className='paperstyle'>
                                <Grid align='center'>

                                    <h2 style={{ color: "#9a7036" }}>Log In</h2>
                                </Grid>

                                <TextField label='Username' placeholder='Enter username' type='text' id='username' fullWidth style={signintxtStyle} onChange={onchangeusernamehandler} />
                                <TextField label='Password' placeholder='Enter password' type={ isPasswordShow ? 'text' : 'password'} id='password' fullWidth style={txtstyle} onChange={onchangepasswordhandler} />

                                {password && (
                                            <Button className='eye-icon' onClick={toggleIsPasswordShowValue}>
                                                <EyeIcon />
                                            </Button>
                                        )}
                                <Button type='submit' variant="contained" className="btnlogin" style={btnstyle} fullWidth>Log In</Button>
                                <p style={{ color: "#F1844D " }}>{errorMessage}</p>
                            </Paper>
                        </Grid>
                    </form>
                </div>
            </div>

        </div>

    )
}

export default Signin