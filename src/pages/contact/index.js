import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  input: {
    margin: theme.spacing(1)
  }
}));

function ContactPage() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Input
        placeholder="Hello world"
        className={classes.input}
        inputProps={{
          "aria-label": "description"
        }}
      />
    </div>
  );
}

export default ContactPage;
