import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import "./App.css";
import Login from './pages/Login';

function App() {
  const classes = useStyles();
  return <div className={classes.root}>
    <Login />
  </div>;
}

const useStyles = makeStyles({
  root: {
    height: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
export default App;
