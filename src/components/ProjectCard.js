import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Image from '../testImage.jpeg';

const useStyles = makeStyles(theme => ({
  cardRoot: {
    maxWidth: '100%'
  }
}));

const ProjectCard = props => {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.cardRoot}>
        <CardActionArea style={{ zIndex: '0' }}>
          <CardMedia
            component='img'
            alt='Contemplative Reptile'
            height='240'
            image={Image}
            title='Contemplative Reptile'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              Lizard
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size='small' color='primary'>
            Share
          </Button>
          <Button size='small' color='primary'>
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default ProjectCard;
