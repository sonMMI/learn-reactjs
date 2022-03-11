import { yupResolver } from '@hookform/resolvers/yup';
import { DeleteOutline } from '@mui/icons-material';
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Paper,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import QuantityField from 'components/form-controls/QuantityField';
import ProductThumbnail from 'features/Product/components/ProductThumbnail';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { formatPrice } from 'utils';
import * as yup from 'yup';
import { cartItemsCountSelector, cartTotalSelector } from './selectors';
import { removeFormCart } from './cartSlice';
CardFeature.propTypes = {};

const useStyles = makeStyles({
  root: {},
  total: {
    textAlign: 'right',
    padding: '16px 16px 0 0',
  },
  cart: {},

  item: {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: '16px',
    height: '100px',
    '& img': {
      height: '80px',
      width: '80px',
    },
  },
  name: {
    height: '100px',
    fontSize: 18,

    display: 'flex',
    flexFlow: 'row nowrap',
  },
  price: {
    textAlign: 'right',
  },
});

function CardFeature(props) {
  const cardTotal = useSelector(cartTotalSelector);
  const items = useSelector((state) => state.cart.cartItems);

  const classes = useStyles();
  const dispatch = useDispatch();

  // const schema = yup.object().shape({
  //   quantity: yup
  //     .number()
  //     .min(1, 'Minimum value is 1')
  //     .required('Please enter quantity')
  //     .typeError('Please enter a number'),
  // });

  // const form = useForm({
  //   defaultValues: {
  //     quantity: 1,
  //   },
  //   resolver: yupResolver(schema),
  // });

  return (
    <Box className={classes.root}>
      <Container>
        <Paper elevation={0}>
          <Grid container sx={{ display: 'block', paddingBottom: '16px' }}>
            <Grid item>
              <Box className={classes.total}>
                Total: {formatPrice(cardTotal)}
              </Box>
              <Box component={'ul'} className={classes.cart}>
                {items.map((item) => (
                  <li key={item.id} className={classes.item}>
                    <Box className={classes.name}>
                      <ProductThumbnail product={item.product} />
                      <Typography variant="body2" sx={{ mt: '18px' }}>
                        {item.product.name}
                      </Typography>
                    </Box>

                    {/* <QuantityField
                      name="quantity"
                      label="Quantity"
                      form={form}
                    /> */}

                    <Typography variant="body2">
                      <Box
                        component="span"
                        fontSize="16px"
                        fontWeight="bold"
                        mr={1}
                        className={classes.price}
                      >
                        {`${item.quantity} x `}
                        {formatPrice(item.product.salePrice)}
                      </Box>
                      {item.product.promotionPercent > 0
                        ? ` - ${item.product.promotionPercent}%`
                        : ''}
                    </Typography>

                    <IconButton>
                      <DeleteOutline />
                    </IconButton>
                  </li>
                ))}
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{ width: '250px' }}
                  size="large"
                >
                  Buy
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}

export default CardFeature;
