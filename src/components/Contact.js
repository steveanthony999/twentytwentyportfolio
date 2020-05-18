import React, { useState } from 'react';

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

import TextLoop from 'react-text-loop';

import './Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

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
    }
  }));

  const classes = useStyles();

  const encode = data => {
    const formData = new FormData();
    Object.keys(data).forEach(k => {
      formData.append(k, data[k]);
    });
    return formData;
  };

  const handleSubmit = e => {
    const data = { 'form-name': 'contact', name, email, message };

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'multipart/form-data; boundary=random' },
      body: encode(data)
    })
      .then(() => setStatus('Form Submission Successful!!'))
      .catch(error => setStatus('Form Submission Failed!'));

    e.preventDefault();
  };

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'name') {
      return setName(value);
    }
    if (name === 'email') {
      return setEmail(value);
    }
    if (name === 'message') {
      return setMessage(value);
    }
  };

  return (
    <Grid item xs={12} style={{ zIndex: '10' }}>
      <Paper className={classes.paper}>
        <Affix offsetTop={-220}>
          <animated.div style={props}>
            <h1>GET IN TOUCH</h1>
            <h3>I'd love to hear from you!</h3>

            <form onSubmit={handleSubmit} action='/thank-you/'>
              <p>
                <label>
                  Your Name:{' '}
                  <input
                    type='text'
                    name='name'
                    value={name}
                    onChange={handleChange}
                  />
                </label>
              </p>

              <p>
                <label>
                  Your Email:{' '}
                  <input
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                  />
                </label>
              </p>

              <p>
                <label>
                  Message:{' '}
                  <textarea
                    name='message'
                    value={message}
                    onChange={handleChange}
                  />
                </label>
              </p>

              <p>
                <button type='submit'>Send</button>
              </p>
            </form>
            <h3>{status}</h3>

            <div style={{ marginTop: '20px' }}>
              <GithubOutlined style={{ fontSize: '2rem', margin: '10px' }} />
              <TwitterOutlined style={{ fontSize: '2rem', margin: '10px' }} />
              <LinkedinOutlined style={{ fontSize: '2rem', margin: '10px' }} />
              <MailOutlined style={{ fontSize: '2rem', margin: '10px' }} />
            </div>
          </animated.div>
        </Affix>
      </Paper>
    </Grid>
  );
};

export default Contact;
