import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


//custom components
import Title from  '../Title'
import Image from  '../Image'
import Tag from '../Tag';

//MUI components
import Card from '@material-ui/core/Card';

const styles = theme => ( {
  card: {
    width: '260px',
    margin: '15px',
    height: '400px',
    position: 'relative',
    boxSizing: 'border-box',
    transition: 'width .3s ease',
    '& img': {
      position: 'absolute',
      zIndex: '1'
    },
    '&:hover': {
      width: '300px',
      height: '440px',
      marginTop: '-5px',
      transition: 'width .3s ease',
      '& h2': {
        fontSize: '3rem',
        transition: 'font-size .3s ease',
      }
    },
    '& .MuiChip-root': {
      position: 'absolute',
      zIndex: '2',
      right: '10px',
      top: '10px'
    },
    '& h2': {
      position: 'absolute',
      zIndex: '2',
      bottom: '40px',
      left: '20px',
      transition: 'font-size .3s ease',
    }
  },

});

class CardCustom extends Component {
  render() {
    const {
      classes,
      cardTitle,
      tagTitle,
      tagColor,
      graphic
    } = this.props;
    return (
      <Card className={classes.card} >
        <Image imgUrl={graphic}/>
        <Tag label={tagTitle} style={tagColor} />
        <Title label={cardTitle}/>
      </Card>
    );
  }
}

CardCustom.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CardCustom);