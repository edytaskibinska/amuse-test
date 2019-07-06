import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  imageStyled: {
    height: '100%',
    '&:empty':{
      left: '-64px',
    }
  }
}));

export default function Image({imgUrl}) {
  const classes = useStyles();
    return (
      <img src={imgUrl} alt="" className={classes.imageStyled}/>
  )
}