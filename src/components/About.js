import React from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faBootstrap,
  faNodeJs,
  faReact,
  faGit,
  faSass,
  faAdobe,
  faDigitalOcean
} from '@fortawesome/free-brands-svg-icons';

import { Typography, Button } from '@material-ui/core';

import { useSpring, animated } from 'react-spring';

const About = () => {
  const props = useSpring({
    padding: 20,
    boxShadow: '0px 10px 20px -5px rgba(0,0,0,0.4)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    opacity: 1,
    from: { opacity: 0 },
    backgroundColor: '#fff'
  });

  const useStyles = makeStyles(theme => ({
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      backgroundColor: '#0f0fff07'
    },
    paperTwo: {
      marginBottom: theme.spacing(3),
      padding: theme.spacing(2),
      color: theme.palette.text.secondary
    },
    heading: {
      color: theme.palette.text.secondary,
      marginTop: '20px',
      fontWeight: '100'
    }
  }));

  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Paper className={classes.paper}>
        <animated.div style={props}>
          <h3>MOTIVATED SELF STARTER</h3>
          <p>
            Self-taught and a bit spunky with an unswerving tenacity for my
            projects.
          </p>
          <p>
            I greatly enjoy deeper learning of my favorite technologies as well
            as staying attuned to the latest frameworks, libraries, and anything
            I can get my hands on.
          </p>
          <h3>PEER ORIENTED</h3>
          <p>
            I also really love collaborating and communicating with others as a
            collective mind focusing on the same objectives.
          </p>
          <div style={{ marginTop: '20px' }}>
            <h3>SOME OF MY FAVORITE TECH</h3>
            <Tooltip arrow title='HTML5'>
              <Button className={classes.paperTwo}>
                <FontAwesomeIcon icon={faHtml5} size='3x' />
              </Button>
            </Tooltip>

            <Tooltip arrow title='CSS3' placement='top'>
              <Button className={classes.paperTwo}>
                <FontAwesomeIcon icon={faCss3Alt} size='3x' />
              </Button>
            </Tooltip>

            <Tooltip arrow title='SASS'>
              <Button className={classes.paperTwo}>
                <FontAwesomeIcon icon={faSass} size='3x' />
              </Button>
            </Tooltip>

            <Tooltip arrow title='BOOTSTRAP' placement='top'>
              <Button className={classes.paperTwo}>
                <FontAwesomeIcon icon={faBootstrap} size='3x' />
              </Button>
            </Tooltip>

            <Tooltip arrow title='JAVASCRIPT'>
              <Button className={classes.paperTwo}>
                <FontAwesomeIcon icon={faJsSquare} size='3x' />
              </Button>
            </Tooltip>

            <Tooltip arrow title='NODE JS' placement='top'>
              <Button className={classes.paperTwo}>
                <FontAwesomeIcon icon={faNodeJs} size='3x' />
              </Button>
            </Tooltip>

            <Tooltip arrow title='REACT JS'>
              <Button className={classes.paperTwo}>
                <FontAwesomeIcon icon={faReact} size='3x' />
              </Button>
            </Tooltip>

            <Tooltip arrow title='GIT' placement='top'>
              <Button className={classes.paperTwo}>
                <FontAwesomeIcon icon={faGit} size='3x' />
              </Button>
            </Tooltip>

            <Tooltip arrow title='ADOBE SUITE'>
              <Button className={classes.paperTwo}>
                <FontAwesomeIcon icon={faAdobe} size='3x' />
              </Button>
            </Tooltip>

            <Tooltip arrow title='DIGITAL OCEAN' placement='top'>
              <Button className={classes.paperTwo}>
                <FontAwesomeIcon icon={faDigitalOcean} size='3x' />
              </Button>
            </Tooltip>
          </div>
        </animated.div>
      </Paper>
      <Typography variant='h3' align='center' className={classes.heading}>
        PROJECTS
      </Typography>
    </Grid>
  );
};

export default About;
