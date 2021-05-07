import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import GroupIcon from '@material-ui/icons/Group';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Constants from '../../constants';
import { Button, Container } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../../redux/actions/userActions';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  appContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
}));

function Dashboard() {
  const classes = useStyles();
  const username = useSelector(state => state.user.currentUser.username);
  
  const dispatch = useDispatch();

  const onSignOut = () => {
    dispatch(signOut());
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
            Hello {username || 'Anonymous'}!
            <div>
              <Button onClick={onSignOut}>Sign Out</Button>
            </div>
          </Container>
        </div>
      </main>
    </React.Fragment>
  );
}

export default Dashboard;