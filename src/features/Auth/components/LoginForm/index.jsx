import { yupResolver } from '@hookform/resolvers/yup';
import { LockOpenOutlined } from '@mui/icons-material';
import { Avatar, Button, LinearProgress, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import InputField from 'components/form-controls/inputField';
import PasswordField from 'components/form-controls/passwordField';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    paddingTop: 32,
  },
  progress: {
    position: 'absolute',
    top: 1,
    width: '100%',
  },
  avatar: {
    margin: '0px auto',
  },
  typography: {
    textAlign: 'center',
  },
});

// ===========
LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};

function LoginForm(props) {
  const classes = useStyles();

  const schema = yup.object().shape({
    identifier: yup
      .string()
      .required('Please enter your email.')
      .email('Please enter a valid email address.'),

    password: yup.string().required('Please enter your password.'),
  });

  const form = useForm({
    defaultValues: {
      identifier: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      await onSubmit(values);
    }
  };

  const { isSubmitting } = form.formState;

  return (
    <div className={classes.root}>
      {isSubmitting && <LinearProgress className={classes.progress} />}

      <Avatar className={classes.avatar} sx={{ bgcolor: 'red' }}>
        <LockOpenOutlined></LockOpenOutlined>
      </Avatar>

      <Typography
        sx={{ m: '16px 0px' }}
        className={classes.typography}
        component="h3"
        variant="h5"
      >
        Sign In
      </Typography>

      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="identifier" label="Email" form={form} />
        <PasswordField name="password" label="Password" form={form} />

        <Button
          disabled={isSubmitting}
          type="submit"
          sx={{ m: '16px 0' }}
          variant="contained"
          color="primary"
          fullWidth
          size={'large'}
        >
          Sign in
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;
