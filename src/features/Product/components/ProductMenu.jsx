import React from 'react';
import PropTypes from 'prop-types';
import { Box, Link } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

ProductMenu.propTypes = {};

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    alignItems: 'center',

    padding: 0,
    listStyleType: 'none',

    '& > li': {
      padding: '16px 32px',
    },

    '& > li > a': {
      color: 'grey',
      textDecoration: 'none',
    },
    '& > li > a.active': {
      color: '#1976d2',
      textDecoration: 'underline',
    },
  },
});

function ProductMenu(props) {
  const { url } = useRouteMatch();
  const classes = useStyles();

  return (
    <Box component="ul" className={classes.root}>
      <li>
        <Link component={NavLink} to={url} exact>
          Description
        </Link>
      </li>
      <li>
        <Link component={NavLink} to={`${url}/additional`} exact>
          Additional Information
        </Link>
      </li>
      <li>
        <Link component={NavLink} to={`${url}/reviews`} exact>
          Reviews
        </Link>
      </li>
    </Box>
  );
}

export default ProductMenu;
