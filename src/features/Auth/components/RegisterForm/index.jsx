import { yupResolver } from '@hookform/resolvers/yup';
import { LockOpenOutlined } from '@mui/icons-material';
import { Avatar, Button, styled, Typography } from '@mui/material';
import InputField from 'components/form-controls/inputField';
import PasswordField from 'components/form-controls/passwordField';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

// css
const MyDiv = styled('div')({
  paddingTop: 32,
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

  const handleSubmit = (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      onSubmit(values);
    }
    form.reset();
  };

  return (
    <MyDiv>
      <Avatar sx={{ bgcolor: 'red', m: '0px auto' }}>
        <LockOpenOutlined></LockOpenOutlined>
      </Avatar>

      <Typography
        sx={{
          textAlign: 'center',
          m: '16px 0px',
        }}
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
          type="submit"
          sx={{ mt: 2 }}
          variant="contained"
          color="primary"
          fullWidth
        >
          Create an account
        </Button>
      </form>
    </MyDiv>
  );
}

export default RegisterForm;
