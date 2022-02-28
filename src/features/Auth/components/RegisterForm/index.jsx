import { yupResolver } from '@hookform/resolvers/yup';
import { LockOpenOutlined } from '@mui/icons-material';
import { Avatar, Button, styled, Typography } from '@mui/material';
import InputField from 'components/form-controls/inputField';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

// css
const MyDiv = styled('div')({
  paddingTop: 32,
});

const styleComponent = {
  root: {},

  avatar: {
    backgroundColor: 'red',
    margin: '0 auto',
  },

  title: {
    textAlign: 'center',
    margin: '16px 0px',
  },

  submit: {
    marginTop: 2,
  },
};

// ===========
RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

function RegisterForm(props) {
  const schema = yup
    .object()
    .shape({
      title: yup
        .string()
        .required('please enter title')
        .min(5, 'title is too short'),
    })
    .required();

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
      <Avatar sx={styleComponent.avatar}>
        <LockOpenOutlined></LockOpenOutlined>
      </Avatar>

      <Typography sx={styleComponent.title} component="h3" variant="h5">
        Create An Account
      </Typography>

      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="fullName" label="Full Name" form={form} />
        <InputField name="email" label="Email" form={form} />
        <InputField name="password" label="Password" form={form} />
        <InputField name="retypePassword" label="Retype Password" form={form} />

        <Button
          sx={styleComponent.submit}
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
