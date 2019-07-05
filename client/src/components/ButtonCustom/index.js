import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Fab from '@material-ui/core/Fab';
import AddCircle from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
  btnStyle: {
    margin: '10px',
    backgroundColor: 'rgb(0, 26, 40)'
  },
  extendedIcon: {
    marginRight:'10px',
    backgroundColor: 'white',
    borderRadius: '30px'
  },
}));

export default function CustomButton({addSeries}) {
  const classes = useStyles();
  return (
    <Fab
      variant="extended"
      size="small"
      aria-label="Add"
      className={classes.btnStyle}
      onClick={addSeries}
    >
      <AddCircle className={classes.extendedIcon} />
      New
    </Fab>
  )
}