import React from "react";
import clsx from "clsx";
import { Button as Btn } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { CircularProgress } from "@material-ui/core";
import { colors } from "../../config";

interface Props {
  children: any;
  variant?: "text" | "outlined" | "contained" | undefined;
  onClick?: () => any | undefined;
  type?: "button" | "reset" | "submit" | undefined;
  isSubmitting?: boolean;
}

export default function Button(props: Props) {
  const { children, variant, isSubmitting, type, onClick } = props;
  const classes = useStyles();

  return (
    <Btn
      type={type}
      onClick={onClick}
      className={clsx(
        classes.button,
        variant === "contained" && classes.buttonContained,
        variant === "outlined" && classes.buttonOutlined
      )}
    >
      {isSubmitting ? <CircularProgress size={24} color="inherit" /> : children}
    </Btn>
  );
}

const useStyles = makeStyles(() => ({
  button: {
    width: 185,
    height: 50,
  },
  buttonContained: {
    backgroundColor: colors.AppBlue,
    color: "white",
    "&:hover": {
      backgroundColor: colors.AppDark,
    },
  },
  buttonOutlined: {
    borderColor: colors.AppBlue,
  },
}));
