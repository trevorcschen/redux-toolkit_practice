import {Box, Image, Text,Button} from '@chakra-ui/react'
import {useDispatch,} from 'react-redux'
import {addToCart} from '../slices/cartSlices'
const ProductItem = ({payload}) => {

    const dispatch = useDispatch()
    const handleAdd = () =>
    {
        dispatch(addToCart(payload))
    }
    return ( 

        <Box d="flex" justifyContent="center" alignItems="center" flexDirection="column" margin={'15px 15px'} width="20%" boxSizing="border-box" key={payload.id}>
        <Image src={payload.cover} alt="Segun Adebayo" height="auto" width={'15vw'}/>
        <Text m={"8px 0 4px"} fontSize="18px" fontWeight="400">{payload.title}</Text>
        <Text m={"4px 0 12px "} fontSize="14px" >{payload.price} {payload.currency}</Text>
        <Button p={"8px 12px"} color="#fff" border="none" borderRadius="2px" 
        outline="none" cursor="pointer" userSelect="none" backgroundColor="#ff6700" _hover={{color:'white'}} onClick={handleAdd}> 加入购物车</Button>
    </Box>

     );
}
 
export default ProductItem;