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
    minWidth: '270px',
    margin: '15px',
    height: '400px',
    position: 'relative',
    boxSizing: 'border-box',
    '& img': {
      position: 'absolute',
      zIndex: '1'
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
      left: '20px'
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
        <Tag label={tagTitle} color={tagColor} />
        <Title label={cardTitle}/>
      </Card>
    );
  }
}

CardCustom.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CardCustom);