import React from 'react';
import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { GithubOutlined } from '@ant-design/icons';
import WebIcon from '@material-ui/icons/Web';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  cardRoot: {
    maxWidth: '100%'
  },
  root: {
    flexGrow: 1
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

const ProjectCard = props => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Card className={classes.cardRoot}>
        {/* <CardActionArea style={{ zIndex: '0' }}> */}
        <CardMedia
          component='img'
          alt='Card Header Image'
          height='240'
          image={props.cardBackgroundImage}
          title='Contemplative Reptile'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {props.projectTitle}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {props.projectDescription}
          </Typography>
        </CardContent>
        <Divider />
        {/* Technologies */}
        <List>
          <ListItem>
            <ListItemText primary='Tech Used:' />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary={props.technologyOne} />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary={props.technologyTwo} />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary={props.technologyThree} />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary={props.technologyFour} />
          </ListItem>
          <Divider />
        </List>
        {/* </CardActionArea> */}
        <CardActions
          style={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <Button
            size='large'
            variant='outlined'
            color='primary'
            href={props.projectRepo}
            target='_blank'
          >
            <GithubOutlined style={{ fontSize: '2rem' }} />
            &nbsp;CODE
          </Button>

          <Button
            size='large'
            variant='outlined'
            color='primary'
            href={props.projectWebsite}
            target='_blank'
          >
            <LiveTvIcon style={{ fontSize: '2rem' }} />
            &nbsp;LIVE
          </Button>

          <Button
            size='large'
            variant='outlined'
            color='primary'
            onClick={handleOpen}
          >
            <WebIcon style={{ fontSize: '2rem' }} />
            &nbsp;DEMO
          </Button>
        </CardActions>
      </Card>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <Grid container justify='center' onClick={handleClose} spacing={5}>
            <img src={props.projectGif} style={{ height: '600px' }} alt='gif' />
            <Grid item style={{ width: '600px' }}>
              <Paper className={classes.paper}>
                <div>
                  <Typography
                    variant='h1'
                    gutterBottom
                    align='center'
                    color='textPrimary'
                  >
                    {props.projectTitle}
                  </Typography>
                  <Typography
                    variant='body1'
                    gutterBottom
                    align='center'
                    color='textPrimary'
                  >
                    {props.projectDescription}
                  </Typography>
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                    marginTop: '60px'
                  }}
                >
                  <Button
                    size='large'
                    variant='contained'
                    color='primary'
                    href={props.projectRepo}
                    target='_blank'
                  >
                    <GithubOutlined style={{ fontSize: '2rem' }} />
                    &nbsp;&nbsp;CODE
                  </Button>
                  <Button
                    size='large'
                    variant='contained'
                    color='primary'
                    href={props.projectWebsite}
                    target='_blank'
                  >
                    <LiveTvIcon style={{ fontSize: '2rem' }} />
                    &nbsp;&nbsp;LIVE
                  </Button>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </Fade>
      </Modal>
    </div>
  );
};

export default ProjectCard;
