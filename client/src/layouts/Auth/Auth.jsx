import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import GroupIcon from '@material-ui/icons/Group';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Constants from '../../constants';
import { Button } from '@material-ui/core';
import { signIn } from '../../redux/actions/userActions';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  appContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
}));

function Auth() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const onSignIn = () => {
    dispatch(signIn({ username: 'Some User 01' }));
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <GroupIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            {Constants.App.Title}
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.appContent}>
          <Container maxWidth="sm">
            <Button onClick={onSignIn}>Sign In</Button>
          </Container>
        </div>
      </main>
    </React.Fragment>
  );
}

export default Auth;