import {
    Box,
    Button,
    Flex,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input
  } from "@chakra-ui/react";
import {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import {addNewBook, editTodo} from '../slices/todosSlice'
import { useHistory, useParams } from "react-router-dom";

const AddTodo = ({match}) => {
      console.log(match)
      const dispatch = useDispatch()
      const history = useHistory()
      const {id} = useParams()
      const updateTodoItem = useSelector((state) => state.todos.todoList.find((data) => data.id === id))
      const validationSchema = Yup.object().shape({
          author: Yup.string().required("Author is required").min(8, 'At least 8 characters in this field'),
          title: Yup.string().required('Title field is required').min(8, 'At least 8 characters in this field')
      })

      const formOptions = {resolver : yupResolver(validationSchema), mode: 'onBlur'}
      const {register, handleSubmit,formState:{errors}} = useForm(formOptions)
      const [todo,setTodo] = useState({ id: updateTodoItem?.id || '',title:updateTodoItem?.title || '', author:updateTodoItem?.author || '' })
      const todoID = useSelector(state => state.todos.todoList.map((data) => data.id))
      const handleChange = (e,d) =>
      {
        setTodo((prevState)=>({...prevState, [d]: e.target.value}))

      }
      const onPost = () =>
      {
        if(id)
        {
          console.log('edit here')
          dispatch(editTodo(todo))
          history.push('/todos')
          return;
        }
        console.log('add hgere')
        let ID = Math.max(...todoID) +1
        todo.id = ID.toString()
        dispatch(addNewBook(todo))
        history.push('/todos')

      }
      return (

          <Flex height="100vh"  alignItems="center" flexDirection="column" width="50vw">
               <Box width="50%">
                   <Box d="flex" flexDirection="row" justifyContent="space-between" marginBottom="20px">
                       <Heading color="white" data-testid="header">
                           Add Book
                       </Heading>
                   </Box>
                   <FormControl
                    isInvalid={!!errors?.title?.message}
                    errortext={errors?.title?.message}
                     p="4"
                    isRequired
                    >
                            <FormLabel color='white'>Title</FormLabel>
                            <Input color="white" placeholder="enter title"  {...register('title')}
                                onChange={(e)=> handleChange(e,'title') } defaultValue={todo.title} />
                            <FormErrorMessage>{errors?.title?.message}</FormErrorMessage>
                   </FormControl>
                    <FormControl
                    isInvalid={!!errors?.author?.message}
                    errortext={errors?.author?.message}
                     p="4"
                    isRequired
                    >
                    <FormLabel color="white" marginTop={4}>
                       Author
                   </FormLabel>
                   <Input color="white" placeholder="enter author" {...register('author')}
                    onChange={(e) => handleChange(e,'author')} defaultValue={todo.author} />
                   <FormErrorMessage>{errors?.author?.message}</FormErrorMessage>
                    </FormControl>
                  
                   <Button marginTop={4} colorScheme="teal" type="submit" onClick={handleSubmit(onPost)}>
                        Submit
                   </Button>
                   </Box> 
          </Flex>

    //     <form style={{ width: 350 }}>
    //     <FormControl
    //       isInvalid={!!errors?.email?.message}
    //       errortext={errors?.email?.message}
    //       p="4"
    //       isRequired
    //     >
    //       <FormLabel>Email</FormLabel>
    //       <Input type="email" name="email" placeholder="Email" {...register('email')} />
    //       <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
    //     </FormControl>
    //     <FormControl
    //       isInvalid={!!errors?.password?.message}
    //       errortext={errors?.password?.message}
    //       px="4"
    //       pb="4"
    //       isRequired
    //     >
    //       <FormLabel>Password</FormLabel>
    //       <Input
    //         type="password"
    //         placeholder="Password"
    //         name="password"
    //         {...register('password')}
    //       />
    //       <FormErrorMessage>{errors?.password?.message}</FormErrorMessage>
    //     </FormControl>
    //     <Button
    //     //   onClick={handleSubmit(onSubmit)}
    //       p="4"
    //       mx="4"
    //       mt="6"
    //       w="90%"
    //       colorScheme="blue"
    //       variant="solid"
    //     //   disabled={!!errors.email || !!errors.password}
    //     >
    //       Login
    //     </Button>
    //   </form>
      );
  }
   
  export default AddTodo;