import { Button, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Route, Router, useNavigate } from "react-router-dom";


export default function RegisterForm() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    return (
        <Grid container spacing={3} sx={{ alignItems: 'center' }}>
            <Grid item xs={12}>
                <TextField 
                    label="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    fullWidth
                    variant="outlined"
                />
            </Grid>
            <Grid item xs={12}>
                <TextField 
                    label="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    fullWidth
                    variant="outlined"
                    type={'password'}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField 
                    label="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    fullWidth
                    variant="outlined"
                    type={'password'}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField 
                    label="E-mail address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                    variant="outlined"
                />
            </Grid>
            <Grid item xs={12}>
                <Button onClick={() => {
                    navigate('/login');
                    alert("Register account successfully !");
                }} variant="contained" fullWidth>Register</Button>
            </Grid>
        </Grid>
    )
}