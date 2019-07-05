import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  titleStyle: {
    fontSize: '4rem',
    color: 'rgba(255,255,255, 1)'
  }
}));

export default function Title({label}) {
  const classes = useStyles();
  return (
    <h2 className={classes.titleStyle}>
      {label}
    </h2>
  )
}