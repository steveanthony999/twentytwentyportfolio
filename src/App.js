import React from 'react';
import { useSpring, animated } from 'react-spring';
// import { GithubOutlined } from '@ant-design/icons';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import ProjectCard from './components/ProjectCard';
import Header from './components/Header';

import PhrazarGif from './images/phrazarGif.gif';
import PhrazarCardBg from './images/phrazar_card_bg.jpg';
import './styles.css';

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
              <ProjectCard
                cardBackgroundImage={PhrazarCardBg}
                projectTitle='Phrazar'
                projectDescription='Translation app for use as a sidekick to major leanguage-learning programs by providing movie-quotes that are fetched, translated, transliterated, and web-speech-enabled.'
                technologyOne='React'
                technologyTwo='Material-UI'
                technologyThree='Yandex API | Azure API | Andruxnet API'
                technologyFour='Mozilla Web Speech API'
                projectWebsite='https://github.com/steveanthony999/phrazar'
                projectGif={PhrazarGif}
              />
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
              {/* <div
                style={{
                  width: '100%',
                  height: '0',
                  paddingBottom: '107%',
                  position: 'relative'
                }}
              >
                <iframe
                  src='https://giphy.com/embed/gL8dyxrcKda3fJ3uRP'
                  width='100%'
                  height='100%'
                  style={{ position: 'absolute' }}
                  frameBorder='0'
                  class='giphy-embed'
                  allowFullScreen
                ></iframe>
              </div> */}
            </animated.div>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
