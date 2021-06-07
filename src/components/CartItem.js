import {Image,Box, Text,Button,Flex} from '@chakra-ui/react'
import {useDispatch} from 'react-redux'
import {increment, decrement} from '../slices/cartSlices'
import styled from "styled-components";
import {handleFloat} from '../utils/calculation'
const StyledButton = styled(Button)`
    padding : 0;
    width: 30px;
    height: 30px;
    margin: 0 10px;
    color: #222
    backgroundColor: #fff;
    border: 1px solid #efefef;
    opacity : ${props => props.disabled ? 0.4 : 1};
    pointer-events: ${props => props.disabled ? "none" : "unset"}
`

const CartItem = ({props}) => {
    const dispatch = useDispatch()
    const handleIncrement = () =>
    {

        dispatch(increment(props))
    }


    const handleDecrement = () =>
    {
        dispatch(decrement(props))
    }
    // const handleFloat = (price) =>
    // {
    //   return parseFloat(price.toFixed(2)).toLocaleString(undefined,
    //     {'minimumFractionDigits':2,'maximumFractionDigits':2})
    // }
    return (<Box d="flex" flexDirection="row" p={'16px 0 '} borderBottom={'1px solid #ededed'}>
        <Image src={props.cover} w={'100px'} h={'100px'} mr={'8px'} border={'1px solid #f6f6f6'} />
        <Box>
        <Text fontSize={'16px'}>{props.title}</Text>
        <Text>Subtotal : {handleFloat(parseFloat(props.price) * props.quantity)} {props.currency}</Text>
        <Flex justifyContent="center" alignItems="center" pt={2}>
            <StyledButton disabled={props.quantity > 1? false : true } onClick={() => handleDecrement()}>-</StyledButton>
            <Box h={30} lineHeight={'30px'}>{props.quantity}</Box>
            <StyledButton onClick={handleIncrement}>+</StyledButton>

        </Flex>
        </Box>

    </Box>);
}

// const ActionButton = (props,) =>
// {
//     const payload = props.payload
//     return (<Button p={0} w={'30px'} h={'30px'} m={'0 10px'}
//      color={"#222"} backgroundColor={'#fff'}
//      border={'1px solid #efefef'} opacity={props.disabled ? 0.4 : 1}
//      pointerEvents={props.disabled ? "none" : "unset"}
//      >{props.children}</Button>)
// }
export default CartItem;