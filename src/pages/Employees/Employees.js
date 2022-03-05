import { Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import EmployeeForm from "./EmployeeForm.js";

const useStyles = makeStyles(theme => ({
  pageContent: {
    margin: 20,
    padding: 16
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
