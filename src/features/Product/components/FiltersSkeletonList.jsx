import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, Skeleton } from '@mui/material';

FiltersSkeletonList.propTypes = {
  length: PropTypes.number,
};

FiltersSkeletonList.defaultProps = {
  length: 7,
};

function FiltersSkeletonList({ length }) {
  return (
    <Box>
      <Grid container>
        {Array.from(new Array(length)).map((x, index) => (
          <Grid item key={index} xs={12} sm={12} md={12} lg={12}>
            <Box padding={1}>
              <Skeleton width="70%" />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default FiltersSkeletonList;
