import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  titleStyle: {
    fontSize: '2.7rem',
    lineHeight: '2.3rem',
    color: 'rgba(255,255,255, 1)',
    textTransform: 'uppercase',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    width: 'calc(100% - 40px)'
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