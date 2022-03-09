import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material';
import { Box, FormHelperText, IconButton, Typography } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import { makeStyles } from '@mui/styles';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';

QuantityField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disable: PropTypes.bool,
};

const useStyles = makeStyles({
  root: {},
  box: {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    maxWidth: '200px',
  },
});

function QuantityField(props) {
  const classes = useStyles();
  const { form, name, label, disabled } = props;
  const { errors, setValue } = form;
  const hasError = !!errors[name];

  return (
    <FormControl
      error={hasError}
      margin="normal"
      fullWidth
      variant="outlined"
      size="small"
    >
      <Typography>{label}</Typography>

      <Controller
        name={name}
        control={form.control}
        render={({ onChange, onBlur, value, name }) => (
          <Box className={classes.box}>
            <IconButton
              onClick={() =>
                setValue(
                  name,
                  Number.parseInt(value) ? Number.parseInt(value) - 1 : 1
                )
              }
            >
              <RemoveCircleOutline />
            </IconButton>

            <OutlinedInput
              id={name}
              type="number"
              disabled={disabled}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
            />

            <IconButton
              onClick={() =>
                setValue(
                  name,
                  Number.parseInt(value) ? Number.parseInt(value) + 1 : 1
                )
              }
            >
              <AddCircleOutline />
            </IconButton>
          </Box>
        )}
      />

      <FormHelperText>{errors[name]?.message}</FormHelperText>
    </FormControl>
  );
}

export default QuantityField;
