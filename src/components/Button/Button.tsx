import React from "react";
import clsx from "clsx";
import { Button as Btn } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { colors } from "../../config";

interface Props {
  children: string;
  variant?: "text" | "outlined" | "contained" | undefined;
  onClick?: () => any | undefined;
}

export default function Button(props: Props) {
  const { children, variant, onClick } = props;
  const classes = useStyles();

  return (
    <Btn
      variant={variant}
      className={clsx(
        classes.button,
        variant === "contained" && classes.buttonContained,
        variant === "outlined" && classes.buttonOutlined
      )}
      onClick={onClick}
    >
      {children}
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
    color: colors.white,
    "&:hover": {
      backgroundColor: colors.AppHighlighted,
    },
  },
  buttonOutlined: {
    borderColor: colors.AppBlue,
  },
}));
