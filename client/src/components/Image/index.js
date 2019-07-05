import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  imageStyled: {
  }
}));

export default function Image({imgUrl}) {
  const classes = useStyles();
    return (
      <img src={imgUrl} alt="" className={classes.imageStyled}/>
  )
}