import { Button, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Route, Router, useNavigate } from "react-router-dom";



export default function LoginForm() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
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
                <Button onClick={() => {
                    navigate('/');
                    alert("Logged in successfully !");
                }} compe variant="contained" fullWidth>Login</Button>
            </Grid>
        </Grid>
    )
}

