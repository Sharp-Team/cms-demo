import { Typography } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
}));

interface Props {
  className?: string;
  title: string;
  children?: any;
}

function Group(props: Props) {
  const classes = useStyles();
  const { className = "", title, children } = props;
  return (
    <div className={`${classes.root} ${className}`}>
      <Typography className={classes.title}>{title}</Typography>
      {children}
    </div>
  );
}

export default Group;
