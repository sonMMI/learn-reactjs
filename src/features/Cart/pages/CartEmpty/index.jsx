import { Box, Button, IconButton, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  thumbnail: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '190px',
    padding: ' 16px 0',
  },
  content: {
    textAlign: 'center',
    paddingTop: '16px',
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '16px',
  },
});

function CartEmpty(props) {
  const classes = useStyles();
  const history = useHistory();

  const handleClickShopping = () => {
    history.push('/products');
  };
  return (
    <Box>
      <img
        className={classes.thumbnail}
        src={`https://salt.tikicdn.com/desktop/img/mascot@2x.png`}
        alt="imageCart"
      />

      <Typography className={classes.content}>
        Không có sản phẩm nào trong giỏ hàng của bạn.
      </Typography>

      <Box onClick={handleClickShopping} className={classes.button}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ width: '250px' }}
          size="large"
        >
          Tiếp tục mua sắm.
        </Button>
      </Box>
    </Box>
  );
}

export default CartEmpty;
