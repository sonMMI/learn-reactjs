import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import PropTypes from 'prop-types';
import React from 'react';
import { formatPrice } from 'utils';

ProductInfo.propTypes = {
  product: PropTypes.object,
};

const useStyles = makeStyles({
  root: {
    paddingBottom: '16px',
    borderBottom: '1px solid #f2f2f2',
  },

  description: {},

  priceBox: {
    padding: '16px',
    backgroundColor: '#fafafa',
  },

  salePrice: {
    fontSize: '32px',
    fontWeight: '500',
    marginRight: '16px',
    lineHeight: '40px',
  },

  originalPrice: {
    fontSize: '14px',
    lineHeight: '20px',
    marginRight: '16px',
    textDecoration: 'line-through',
    color: 'rgb(128, 128, 137)',
  },
  promotionPercent: {
    fontSize: '14px',
    fontWeight: '400',
    color: 'rgb(255, 66, 78)',
    border: '1px solid rgb(255, 66, 78)',
    backgroundColor: 'rgb(255, 240, 241)',
    borderRadius: '2px',
  },
});

function ProductInfo({ product = {} }) {
  const { name, shortDescription, salePrice, originalPrice, promotionPercent } =
    product;
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography component="h1" variant="h4">
        {name}
      </Typography>
      <Typography variant="body2" sx={{ m: '16px 0' }}>
        {shortDescription}
      </Typography>

      <Box className={classes.priceBox}>
        <Box component="span" className={classes.salePrice}>
          {formatPrice(salePrice)}
        </Box>

        {promotionPercent > 0 && (
          <>
            <Box component="span" className={classes.originalPrice}>
              {formatPrice(originalPrice)}
            </Box>
            <Box component="span" className={classes.promotionPercent}>
              -{promotionPercent}%
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
}

export default ProductInfo;
