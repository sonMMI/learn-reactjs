import { Box, Container, Grid, LinearProgress, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { addToCart } from 'features/Cart/cartSlice';
import { useSnackbar } from 'notistack';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import AddToCartForm from '../components/AddToCartForm';
import ProductAdditional from '../components/ProductAdditional';
import ProductDescription from '../components/ProductDescription';
import ProductInfo from '../components/ProductInfo';
import ProductMenu from '../components/ProductMenu';
import ProductReviews from '../components/ProductReviews';
import ProductThumbnail from '../components/ProductThumbnail';
import useProductDetail from '../hooks/useProductDetail';

const useStyles = makeStyles({
  root: {
    paddingBottom: '24px',
  },
  left: {
    width: '400px',
    padding: '12px',
    borderRight: '1px solid #f2f2f2',
  },
  right: {
    flex: '1 1 0',
    padding: '12px',
  },
  loading: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
  },
});

function DetailPage() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const isLoggedIn = useSelector((state) => state.user.current);

  const {
    params: { productId },
    url,
  } = useRouteMatch();

  const { product, loading } = useProductDetail(productId);

  if (loading) {
    //TODO  make this beautiful
    return (
      <Box className={classes.loading}>
        <LinearProgress />
      </Box>
    );
  }

  const handleAddToCartSubmit = ({ quantity }) => {
    if (Object.keys(isLoggedIn).length !== 0) {
      enqueueSnackbar('Add To Cart Successfully 🎉', { variant: 'success' });
      const action = addToCart({
        id: product.id,
        product,
        quantity,
      });
      dispatch(action);
    } else {
      enqueueSnackbar('Please Login', { variant: 'warning' });
    }
  };

  return (
    <Box className={classes.root}>
      <Container>
        <Paper elevation={0}>
          <Grid container>
            <Grid item className={classes.left}>
              <ProductThumbnail product={product} />
            </Grid>
            <Grid item className={classes.right}>
              <ProductInfo product={product} />
              <AddToCartForm onSubmit={handleAddToCartSubmit} />
            </Grid>
          </Grid>
        </Paper>

        <ProductMenu />
        <Switch>
          <Route exact path={url}>
            <ProductDescription product={product} />
          </Route>

          <Route
            exact
            path={`${url}/additional`}
            component={ProductAdditional}
          ></Route>

          <Route
            exact
            path={`${url}/reviews`}
            component={ProductReviews}
          ></Route>
        </Switch>
      </Container>
    </Box>
  );
}

export default DetailPage;
