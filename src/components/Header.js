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

import { Typography } from '@material-ui/core';

import { Affix } from 'antd';

import { useSpring, animated } from 'react-spring';

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
      marginTop: '20px'
    }
  }));

  const classes = useStyles();

  return (
    <Grid item xs={12} style={{ zIndex: '10' }}>
      <Paper className={classes.paper}>
        <Affix offsetTop={-160}>
          <animated.div style={props}>
            <h1>Steven Woodward</h1>
            <h3>Front-end Web Developer</h3>
            <div>
              <GithubOutlined style={{ fontSize: '2rem', margin: '10px' }} />
              <TwitterOutlined style={{ fontSize: '2rem', margin: '10px' }} />
              <LinkedinOutlined style={{ fontSize: '2rem', margin: '10px' }} />
              <MailOutlined style={{ fontSize: '2rem', margin: '10px' }} />
            </div>
          </animated.div>
        </Affix>
      </Paper>
      <Typography
        variant='subtitle1'
        align='center'
        className={classes.heading}
      >
        PROJECTS
      </Typography>
    </Grid>
  );
};

export default Header;
