import { Box, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { removeFormCart, setQuantity } from 'features/Cart/cartSlice';
import ProductCart from 'features/Cart/components/ProductCart';
import { cartTotalSelector } from 'features/Cart/selectors';
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

  const classes = useStyles();
  const dispatch = useDispatch();

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
          >
            Buy
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default CartsItem;
