import React from 'react';
import { makeStyles } from '@material-ui/styles';

//MUI components
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles({
  chip: {
    padding: '0px 10px',
    fontSize: '0.7rem',
    height: '23px',
    width: '80px'
  },
});

export default function Tag({label, color}) {
  const classes = useStyles();
  return <Chip label={label} className={classes.chip} style={color}/>;
}
