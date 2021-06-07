import {Box, Button, Text} from '@chakra-ui/react'
import styled, { keyframes } from "styled-components";
import {useSelector ,useDispatch} from 'react-redux'
import {toggledCart, clearCart} from '../slices/cartSlices'
import CartItem from './CartItem'
import {handleFloat} from '../utils/calculation'
const CartContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 2;
  width: 300px;
  height: 100vh;
  padding: 60px 12px 0;
  background: #fff;
  overflow: auto;
  transition: transform 0.2s ease-in-out;
  transform: translateX(${(p) => (p.visible ? 0 : "300px")});
`;

const EmptyCart = styled.div`
  padding: 16px;
  color: #888;
  text-align: center;
`;

const Cart = () => {
    const dispatch = useDispatch()
    const {isOpened, cartItems} = useSelector(state => state.carts)
    const price = useSelector((state) => 
     state.carts.cartItems.reduce((total, current) => (total += current.price * current.quantity),0)
     )
    const handleToggled = () =>
    {
      dispatch(toggledCart())
    }
    const handleClear = () =>
    {
      dispatch(clearCart())
    }
    return (<>
    <CartContainer visible={isOpened}>
      {cartItems.length > 0 
      ?
      <Button w={'100%'} m={"16px 0"} 
      backgroundColor="#ff6700" color="white"
       _hover={{backgroundColor:'#ff6700',opacity:'0.9'}} onClick={handleClear}>Clear Cart</Button> 
       : 
       <EmptyCart>No items in the cart</EmptyCart>
      }
      
      {cartItems.map((item,key) =>
        <CartItem props = {item} key={key} />
      )}
      {cartItems.length > 0 
      && <Text textAlign={'end'}>{handleFloat(price)} CNY</Text> }
    </CartContainer>
    {isOpened && 
        <Box pos={'fixed'} top={0} bottom={0}
         left={0} right={0} zIndex={1}
          background={"rgba(0,0,0,0.75)"}
          onClick={handleToggled}
          
          ></Box>
 }
    
    </>);
}
 
export default Cart;