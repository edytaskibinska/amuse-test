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
    width: '250px',
    display: 'inline-block',
    marginRight: '10px',
    height: '400px',
    position: 'relative',
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
      left: '20px',
      bottom: '40px'
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