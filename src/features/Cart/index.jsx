import { Box, Container, Grid, Paper } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import CartEmpty from './pages/CartEmpty';
import CartsItem from './pages/CartsItem';
import { cartTotalSelector } from './selectors';

function CardFeature(props) {
  const cardTotal = useSelector(cartTotalSelector);

  return (
    <Box>
      <Container>
        <Paper elevation={0}>
          <Grid container sx={{ display: 'block', paddingBottom: '16px' }}>
            <Grid item>
              {cardTotal > 0 && <CartsItem />}

              {cardTotal === 0 && <CartEmpty />}
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}

export default CardFeature;
