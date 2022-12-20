import { Button, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Route, Router, useNavigate } from "react-router-dom";


export default function ForgotForm() {
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
                    label="E-mail address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                    variant="outlined"
                />
            </Grid>

            <Grid item xs={12}>
                <TextField 
                    label="New Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    fullWidth
                    variant="outlined"
                    type={'password'}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField 
                    label="Confirm New Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    fullWidth
                    variant="outlined"
                    type={'password'}
                />
            </Grid>
            
            <Grid item xs={12}>
                <Button onClick={() => {
                    navigate('/login');
                    alert("Change password successfully !");
                }} variant="contained" fullWidth>Continue</Button>
            </Grid>
        </Grid>
    )
}