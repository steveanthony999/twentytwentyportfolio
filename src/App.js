import React from 'react';
import { useSpring, animated } from 'react-spring';
import { GithubOutlined } from '@ant-design/icons';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import './styles.css';
import ProjectCard from './components/ProjectCard';
import Header from './components/Header';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: '#0f0fff07'
  }
}));

function App() {
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

  const classes = useStyles();

  return (
    <Container maxWidth='md' className={classes.root}>
      <Grid container spacing={3}>
        <Header />
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <animated.div style={props}>
              <ProjectCard />
            </animated.div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <animated.div style={props}>
              <ProjectCard />
            </animated.div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <animated.div style={props}>
              <ProjectCard />
            </animated.div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <animated.div style={props}>
              <ProjectCard />
            </animated.div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <animated.div style={props}>
              <ProjectCard />
            </animated.div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <animated.div style={props}>
              <ProjectCard />
            </animated.div>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
