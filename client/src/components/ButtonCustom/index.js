import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Fab from '@material-ui/core/Fab';
import AddCircle from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
  btnStyle: {
    padding: '5px!important',
    margin: '10px',
    backgroundColor: 'rgba(0, 68, 102, 1)',
    color: 'rgba(0, 68, 102, 1)',
    '&:hover': {
      backgroundColor: 'rgba(0, 68, 102, .6)',
    }
  },
  extendedIcon: {
    marginRight:'10px',
    backgroundColor: 'white',
    borderRadius: '30px'
  },
  textBold: {
    fontWeight: '600',
    color: 'rgba(255, 255, 255, 1)',
    marginRight: '10px'
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
      <span className={classes.textBold} >New</span>
    </Fab>
  )
}