import { yupResolver } from '@hookform/resolvers/yup';
import { LockOpenOutlined } from '@mui/icons-material';
import { Avatar, Button, LinearProgress, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import InputField from 'components/form-controls/InputField';
import PasswordField from 'components/form-controls/PasswordField';
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
RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

function RegisterForm(props) {
  const schema = yup.object().shape({
    fullName: yup
      .string()
      .required('Please enter your full name.')
      .test(
        'should has least two words.',
        'Please enter at least two words.',
        (value) => {
          return value.split(' ').length >= 2;
        }
      ),

    email: yup
      .string()
      .required('Please enter your email.')
      .email('Please enter a valid email address.'),

    password: yup
      .string()
      .required('Please enter your password.')
      .matches(
        /^.*(?=.{8,})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        'Please enter at least eat characters, one number and one uppercase.'
      ),
    retypePassword: yup
      .string()
      .required('Please confirm your password.')
      .oneOf([yup.ref('password')], `Password don't match.`),
  });

  const form = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      retypePassword: '',
    },
    resolver: yupResolver(schema),
  });

  const classes = useStyles();

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
        Create An Account
      </Typography>

      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="fullName" label="Full Name" form={form} />
        <InputField name="email" label="Email" form={form} />
        <PasswordField name="password" label="Password" form={form} />
        <PasswordField
          name="retypePassword"
          label="Retype Password"
          form={form}
        />

        <Button
          disabled={isSubmitting}
          type="submit"
          sx={{ m: '16px 0' }}
          variant="contained"
          color="primary"
          fullWidth
          size={'large'}
        >
          Create an account
        </Button>
      </form>
    </div>
  );
}

export default RegisterForm;
