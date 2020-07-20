import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, TextField } from "@material-ui/core";
import Button from "../../components/Button";

export default function Login() {
  const classes = useStyles();
  return (
    <Paper>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email")
            .required("Email is required")
            .max(50, "Max length is 50"),
          password: Yup.string()
            .required("Password is required")
            .min(8, "Min password length is 8")
            .max(50, "Max password length is 50"),
        })}
        onSubmit={(values) => {}}
      >
        {(formik) => {
          const {
            handleSubmit,
            handleChange,
            touched,
            errors,
            values,
            isSubmitting
          } = formik;

          return (
            <form onSubmit={handleSubmit} noValidate className={classes.root}>
              <h3>EasyTrade</h3>
              <div className={classes.formElements}>
                <div className={classes.textfieldContainer}>
                  <TextField
                    variant="outlined"
                    label="Email"
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={values.email}
                  />
                  {touched.email && errors.email && (
                    <span className={classes.errorText}>{errors.email}</span>
                  )}
                </div>
                <div className={classes.textfieldContainer}>
                  <TextField
                    variant="outlined"
                    label="Password"
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={values.password}
                  />
                  {touched.password && errors.password && (
                    <span className={classes.errorText}>{errors.password}</span>
                  )}
                </div>

                <Button variant="contained" type="submit" isSubmitting={isSubmitting}>
                  Log in
                </Button>
              </div>
              <div className={classes.links}>
                <Button>Forgot your password?</Button>
                <Button>Create new account</Button>
              </div>
            </form>
          );
        }}
      </Formik>
    </Paper>
  );
}

const useStyles = makeStyles({
  root: {
    padding: 30,
    paddingLeft: 40,
    paddingRight: 40,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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
  },
  textfieldContainer: {
    display: "flex",
    flexDirection: "column",
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 4,
  },
});
