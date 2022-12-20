import { makeStyles } from "@mui/styles";
import { Box, Container, Typography } from '@mui/material';
import Logo from '../../components/logo/Logo';
import { Link } from 'react-router-dom';




export default function Home() {
  const classes = useStyles();
  return (
    <Logo />
    
  )
}


const useStyles = makeStyles({
  root: {
    display: 'flex',
  }
})