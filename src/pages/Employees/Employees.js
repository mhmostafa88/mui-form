import { Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import EmployeeForm from "./EmployeeForm.js";

const useStyles = makeStyles(theme => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(2)
  }
}))

export default function Employees() {

  const classes = useStyles();
  return (
    <Paper className={classes.pageContent}>
      <EmployeeForm />
    </Paper>
  );
}
