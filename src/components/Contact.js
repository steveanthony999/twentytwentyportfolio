import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

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

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { Affix } from 'antd';

import { useSpring, animated } from 'react-spring';

import './Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [file, setFile] = useState({});

  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles);
    setFile(acceptedFiles[0]);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

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
    const data = { 'form-name': 'contact', name, email, message, file };

    fetch('/', {
      method: 'POST',
      //   headers: { 'Content-Type': 'multipart/form-data; boundary=random' },
      body: encode(data)
    })
      .then(() => setStatus('Form Submission Successful!!'))
      .catch(error => setStatus('Form Submission Failed!'));

    setName('');
    setMessage('');
    setEmail('');

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

            <form
              onSubmit={handleSubmit}
              action='/thank-you/'
              style={{ width: '100%' }}
            >
              <p>
                <TextField
                  id='outlined-basic'
                  label='Your Name'
                  variant='outlined'
                  type='text'
                  name='name'
                  value={name}
                  onChange={handleChange}
                  fullWidth
                />
              </p>

              <p>
                <TextField
                  id='outlined-basic'
                  label='Your Email'
                  variant='outlined'
                  type='email'
                  name='email'
                  value={email}
                  onChange={handleChange}
                  fullWidth
                />
              </p>

              <p>
                <TextField
                  id='outlined-multiline-static'
                  label='Your Message'
                  multiline
                  rows={4}
                  defaultValue='Default Value'
                  variant='outlined'
                  name='message'
                  value={message}
                  onChange={handleChange}
                  fullWidth
                />
              </p>

              <div {...getRootProps()} style={{ display: 'none' }}>
                <input {...getInputProps()} />
                {isDragActive ? (
                  <p>Drop the files here ...</p>
                ) : (
                  <p>Drag 'n' drop some files here, or click to select files</p>
                )}
              </div>

              <p>
                <Button
                  type='submit'
                  variant='outlined'
                  size='large'
                  color='primary'
                  fullWidth
                >
                  SEND
                </Button>
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
