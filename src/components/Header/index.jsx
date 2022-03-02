import CloseIcon from '@mui/icons-material/Close';
import CodeIcon from '@mui/icons-material/Code';
import { IconButton } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import Login from 'features/Auth/components/Login';
import Register from 'features/Auth/components/Register';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: 8,
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
  },
  closeButton: {
    top: 16,
    right: 16,
    zIndex: 1,
  },
});

const MODE = {
  LOGIN: 'login',
  REGISTER: 'register',
};

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState(MODE.LOGIN);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <CodeIcon className={classes.menuButton} />

          <Typography variant="h6" className={classes.title}>
            <Link className={classes.link} to="/">
              DVS SHOP
            </Link>
          </Typography>

          <NavLink className={classes.link} to="/todos">
            <Button color="inherit">Todos</Button>
          </NavLink>

          <NavLink className={classes.link} to="/albums">
            <Button color="inherit">Albums</Button>
          </NavLink>

          <Button color="inherit" onClick={handleClickOpen}>
            Register
          </Button>
        </Toolbar>
      </AppBar>

      <Dialog
        open={open}
        onClose={(handleClose, reason) => {
          if (reason !== 'backdropClick' && reason !== 'escapeKeyDown') {
            handleClose();
          }
        }}
      >
        <IconButton
          className={classes.closeButton}
          sx={{ position: 'absolute' }}
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>

        <DialogContent>
          {mode === MODE.REGISTER && (
            <>
              <Register closeDialog={handleClose} />
              <Box textAlign="center">
                <Button color="primary" onClick={() => setMode(MODE.LOGIN)}>
                  Already have an account. Login here!
                </Button>
              </Box>
            </>
          )}

          {mode === MODE.LOGIN && (
            <>
              <Login closeDialog={handleClose} />
              <Box textAlign="center">
                <Button color="primary" onClick={() => setMode(MODE.REGISTER)}>
                  Don't have an account. Register here!
                </Button>
              </Box>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
