import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, TextField } from "@material-ui/core";
import Button from "../../components/Button";

export default function Login() {
  const classes = useStyles();
  return (
    <Paper>
      <div className={classes.root}>
        <h3>EasyTrade</h3>
        <div className={classes.formElements}>
          <TextField variant="outlined" label="Email" type="email" />
          <TextField variant="outlined" label="Password" type="password" />
          <Button variant="contained">Log in</Button>
        </div>
        <div className={classes.links}>
          <div>Forgot your password?</div>
          <div>Create new account</div>
        </div>
      </div>
    </Paper>
  );
}

const useStyles = makeStyles({
  root: {
    padding: 30,
    paddingLeft: 40,
    paddingRight: 40,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  formElements: {
    height: 220,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  links: {
    height: 50,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  }
});
