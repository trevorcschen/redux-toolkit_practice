import {useDispatch , useSelector} from 'react-redux'
import {useEffect} from 'react'
import {Box, Image, Text,Button} from '@chakra-ui/react'
import {getProducts ,startFetching} from '../slices/productSlices'
import axios from 'axios'
import ProductItem from './ProductItem'
const Product = () => {
    const {products,isLoading} = useSelector((state) => state.products)
    const dispatch = useDispatch()
    useEffect(() =>
    {

        dispatch(startFetching())
            axios.get('http://127.0.0.1:8000/products')
            .then((res) => dispatch(getProducts(res.data)))
            .catch((err) => console.log(err))

        
    },[])





    return (<Box d="flex" justifyContent="center" alignItems="center" p="20px" flexWrap="wrap">
        {isLoading && <div>Loading</div>}
        {products.map((item,key) =>
        <ProductItem payload ={item} key={key} />
        )}
       

    </Box>);
}
 
export default Product;