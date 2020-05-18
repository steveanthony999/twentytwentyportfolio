import React from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import {
  GithubOutlined,
  TwitterOutlined,
  LinkedinOutlined,
  MailOutlined
} from '@ant-design/icons';

import { Typography, Button } from '@material-ui/core';

import { Affix } from 'antd';

import { useSpring, animated } from 'react-spring';

import TextLoop from 'react-text-loop';

const Header = () => {
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
    heading: {
      color: theme.palette.text.secondary,
      marginTop: '20px',
      fontWeight: '100'
    },
    paperTwo: {
      marginTop: theme.spacing(-2),
      padding: theme.spacing(2),
      color: theme.palette.text.secondary
    }
  }));

  const classes = useStyles();

  return (
    <Grid item xs={12} style={{ zIndex: '10' }}>
      <Paper className={classes.paper}>
        <Affix offsetTop={-220}>
          <animated.div style={props}>
            <h1>Steven Woodward</h1>
            <h3>Front-end Web Developer &</h3>
            <TextLoop
              springConfig={{ stiffness: 180, damping: 12 }}
              mask={true}
            >
              <h3>Life-long Learner</h3>
              <h3>Oil Painter</h3>
              <h3>Bookworm</h3>
              <h3>Photographer</h3>
              <h3>Designer</h3>
            </TextLoop>
            <div style={{ marginTop: '20px' }}>
              <Button
                href='https://www.github.com/steveanthony999'
                target='_blank'
                className={classes.paperTwo}
              >
                <GithubOutlined style={{ fontSize: '2rem', margin: '10px' }} />
              </Button>

              <Button
                href='https://www.twitter.com/stevedotvegas'
                target='_blank'
                className={classes.paperTwo}
              >
                <TwitterOutlined style={{ fontSize: '2rem', margin: '10px' }} />
              </Button>

              <Button
                href='https://www.linkedin.com/in/steven-woodward-7a422713b/'
                target='_blank'
                className={classes.paperTwo}
              >
                <LinkedinOutlined
                  style={{ fontSize: '2rem', margin: '10px' }}
                />
              </Button>

              <Button href='#contact' className={classes.paperTwo}>
                <MailOutlined style={{ fontSize: '2rem', margin: '10px' }} />
              </Button>
            </div>
          </animated.div>
        </Affix>
      </Paper>
      <Typography variant='h3' align='center' className={classes.heading}>
        ABOUT
      </Typography>
    </Grid>
  );
};

export default Header;
