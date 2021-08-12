import { Container, Grid, TextField, Button, Typography, CircularProgress } from '@material-ui/core';
import React, { useState } from 'react';
import { useAuth } from './../../contexts/AuthContext';
import { useHistory } from 'react-router-dom';
import MuiAlert from '@material-ui/lab/Alert';
import { useEffect } from 'react';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Registration = () => {
  const [newUser, setNewUser] = useState({});
  const { registerUser, user, loading, errorMessage, success, clearState } = useAuth();
  const history = useHistory();

  const handleChange = (e) => {
    let newObj = {
      ...newUser,
    };
    newObj[e.target.name] = e.target.value;
    setNewUser(newObj);
  };

  const signup = (e) => {
    e.preventDefault();
    try {
      registerUser(newUser);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (success) {
      history.push('/login');
    }

    return () => {
      clearState();
    };
  }, [success]);

  useEffect(() => {
    if (user) {
      history.push('/');
    }

    return () => {
      clearState();
    };
  }, [user]);

  return (
    <Container component="main" maxWidth="xs" style={{border:'1px solid black', marginTop:'30px', textAlign:'center', borderRadius:'15px'}}>
      <form action="" onSubmit={signup}>
        <Grid container>
          <div>
            <Typography component="h1" variant="h5" style={{marginTop:'30px'}}>
              Registration
            </Typography>
            {errorMessage ? <Alert severity="error">{errorMessage}</Alert> : null}
          </div>
          <Grid>
            <TextField
              onChange={(e) => handleChange(e)}
              name="email"
              variant="outlined"
              type="email"
              required
              label="Email Address"
              style={{margin:'20px 0 '}}
            />
            <TextField style={{margin:'20px 0 '}} onChange={(e) => handleChange(e)} name="password" variant="outlined" required label="Password" />
            <TextField style={{margin:'20px 0 '}} variant="outlined" required label="Password again" />

          </Grid>
          <Button style={{margin:'0 auto 10px'}} variant="contained" color="primary" type="submit" disabled={loading}>
            {loading ? <CircularProgress /> : 'Sign Up'}
          </Button>
        </Grid>
      </form>
    </Container>
  );
};

export default Registration;