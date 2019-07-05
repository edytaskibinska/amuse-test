import React from 'react';
import { makeStyles } from '@material-ui/styles';

//MUI components
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles({
  chip: {
    padding: '5px 10px'
  },
});

export default function Tag({label, color}) {
  const classes = useStyles();
  return <Chip label={label} className={classes.chip} color={color}/>;
}