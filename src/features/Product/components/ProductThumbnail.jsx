import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import { STATIC_HOST } from 'constants';
import { THUMBNAIL_PLACEHOLDER } from 'constants';

ProductThumbnail.propTypes = {
  product: PropTypes.object,
};

function ProductThumbnail({ product }) {
  const thumbnailUrl = product.thumbnail
    ? `${STATIC_HOST}${product.thumbnail?.url}`
    : THUMBNAIL_PLACEHOLDER;

  return (
    <Box>
      <Box padding={1} minHeight={215}>
        <img src={thumbnailUrl} alt={product.name} width="100%" />
      </Box>
    </Box>
  );
}

export default ProductThumbnail;
