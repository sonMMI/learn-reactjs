import { Box, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { buyItems, removeFormCart, setQuantity } from 'features/Cart/cartSlice';
import ProductCart from 'features/Cart/components/ProductCart';
import { cartTotalSelector } from 'features/Cart/selectors';
import { useSnackbar } from 'notistack';
import { useDispatch, useSelector } from 'react-redux';
import { formatPrice } from 'utils';

const useStyles = makeStyles({
  total: {
    textAlign: 'right',
    padding: '32px 48px 0 0',
    fontWeight: 'bold',
    fontSize: '22px',
    color: 'rgb(254, 56, 52)',
  },

  li: {
    listStyleType: 'none',
    paddingRight: '32px',
    height: '100px',
    '& img': {
      height: '80px',
      width: '80px',
    },
  },

  button: {
    display: 'flex',
    justifyContent: 'right',
    paddingRight: '32px',
  },
});

function CartsItem(props) {
  const cardTotal = useSelector(cartTotalSelector);
  const items = useSelector((state) => state.cart.cartItems);
  const isLoggedIn = useSelector((state) => state.user.current);

  const classes = useStyles();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleRemoveItem = (id) => {
    const action = removeFormCart(id);
    dispatch(action);
  };

  const handleChangeQuantity = (id, quantity) => {
    const action = setQuantity({
      id,
      quantity: quantity.quantity,
    });
    dispatch(action);
  };

  const handleBuy = () => {
    if (Object.keys(isLoggedIn).length !== 0) {
      dispatch(buyItems());
      enqueueSnackbar('Buy Successfully 🎉', { variant: 'success' });
    } else {
      enqueueSnackbar('Please Login', { variant: 'warning' });
    }
  };

  return (
    <Box>
      <Box className={classes.total}>Total: {formatPrice(cardTotal)}</Box>

      <Box component={'ul'}>
        {items.map((item) => (
          <li key={item.id} className={classes.li}>
            <ProductCart
              item={item}
              handleRemoveItem={handleRemoveItem}
              setQuantity={handleChangeQuantity}
            />
          </li>
        ))}

        <Box className={classes.button}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ width: '250px' }}
            size="large"
            onClick={handleBuy}
          >
            Buy
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default CartsItem;
