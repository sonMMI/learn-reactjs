import React from 'react';
import PropTypes from 'prop-types';
import { Box, IconButton, Typography } from '@mui/material';
import { DeleteOutline } from '@mui/icons-material';
import ProductThumbnail from 'features/Product/components/ProductThumbnail';
import { makeStyles } from '@mui/styles';
import { formatPrice } from 'utils';
import QuantityItemForm from './QuantityItemForm';

ProductCart.propTypes = {
  item: PropTypes.object,
  handleRemoveItem: PropTypes.func,
  setQuantity: PropTypes.func,
};

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    flex: '1 1 auto',
    alignItems: 'center',
  },

  total: {
    textAlign: 'right',
    padding: '16px 16px 0 0',
  },

  thumbnail: {
    height: '100px',
    fontSize: 18,

    display: 'flex',
    flexFlow: 'row nowrap',
  },

  name: {
    paddingTop: '16px',
    minWidth: '180px',
    maxWidth: '180px',
  },
  price: {
    textAlign: 'right',
    fontSize: '16px',
    fontWeight: 'bold',
    marginRight: '8px',
  },
});

function ProductCart({ item = {}, handleRemoveItem, setQuantity }) {
  const classes = useStyles();
  const product = item.product;

  const handleRemove = (id) => {
    if (item) {
      handleRemoveItem(id);
    }
  };

  const handleChangeQuantity = (quantity) => {
    if (item) {
      setQuantity(item.id, quantity);
    }
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.thumbnail}>
        <ProductThumbnail product={product} />
        <Typography variant="body2" className={classes.name}>
          {product.name}
        </Typography>
      </Box>

      <QuantityItemForm item={item} onSubmit={handleChangeQuantity} />

      <Typography variant="body2" sx={{ minWidth: '150px', maxWidth: '151px' }}>
        <Box component="span" className={classes.price}>
          {`${item.quantity} x `}
          {formatPrice(product.salePrice)}
        </Box>
        {product.promotionPercent > 0 ? ` - ${product.promotionPercent}%` : ''}
      </Typography>

      <IconButton onClick={() => handleRemove(item.id)}>
        <DeleteOutline />
      </IconButton>
    </Box>
  );
}

export default ProductCart;
