import { yupResolver } from '@hookform/resolvers/yup';
import QuantityField from 'components/form-controls/QuantityField';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

QuantityItemForm.propTypes = {
  item: PropTypes.object,
  onSubmit: PropTypes.func,
};

function QuantityItemForm({ item = {}, onSubmit }) {
  const schema = yup.object().shape({
    quantity: yup
      .number()
      .min(1, 'Minimum value is 1')
      .required('Please enter quantity')
      .typeError('Please enter a number'),
  });

  const form = useForm({
    defaultValues: {
      quantity: item.quantity || 1,
    },
    resolver: yupResolver(schema),
  });

  const handleChangeQuantity = (quantity) => {
    if (onSubmit) {
      onSubmit(quantity);
    }
  };

  return (
    <form onSubmit={form.handleSubmit(handleChangeQuantity)}>
      <QuantityField name="quantity" label="" form={form} />
    </form>
  );
}

export default QuantityItemForm;
