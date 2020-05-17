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
import WeatherCardBg from './images/weather_card_bg.jpg';
import WeatherMockup from './images/weatherMockup.jpg';
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
        {/* Phrazar */}
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <animated.div style={props}>
              <ProjectCard
                cardBackgroundImage={PhrazarCardBg}
                projectTitle='Phrazar'
                projectDescription='Translation web app for use as a sidekick to major leanguage-learning programs by providing movie-quotes that are fetched, translated, transliterated, and web-speech-enabled.'
                technologyOne='React'
                technologyTwo='Material-UI'
                technologyThree='Yandex API | Azure API | Andruxnet API'
                technologyFour='Mozilla Web Speech API'
                projectRepo='https://github.com/steveanthony999/phrazar'
                projectGif={PhrazarGif}
              />
            </animated.div>
          </Paper>
        </Grid>
        {/* The Weather */}
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <animated.div style={props}>
              <ProjectCard
                cardBackgroundImage={WeatherCardBg}
                projectTitle='Weather'
                projectDescription='Vanilla JavaScript web app with a blocky UI that uses permitted geolocation to serve you the weather in your preferred metrics along with a bonus inspirational quote.'
                technologyOne='HTML5 | CSS3 | JavaScript'
                technologyTwo='Node Js | Express Js'
                technologyThree='OpenWeather API | Mapquest API'
                technologyFour='Mozilla Geolocation API'
                projectRepo='https://github.com/steveanthony999/weatherfy'
                projectWebsite='https://theweatherbysteve.herokuapp.com/'
                projectGif={WeatherMockup}
              />
            </animated.div>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
