import { Box, Heading, IconButton, Text } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {deleteTodo} from '../slices/todosSlice'
import {useDispatch } from 'react-redux'
import {useState, useRef} from 'react'
import {useHistory} from 'react-router-dom'
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,Button,
  } from "@chakra-ui/react"



const TodoItem = ({title, author, id, ...rest}) => {    
    const dispatch = useDispatch()
    const [isOpen, setIsOpen] = useState(false)
    const onClose = () => setIsOpen(false)
    const cancelRef = useRef()
    const history = useHistory()

    const handleDelete = () =>
    {
        // console.log('handle delete')
        // console.log(id)
        dispatch(deleteTodo(id))
        onClose()
    }

    const handleEdit = () =>
    {
        history.push(`/update-todo/${id}`)
    }





    return (
    <Box
    p={5}
    justifyContent="space-between"
    d="flex"
    shadow="md"
    borderWidth="1px"
    >
        <Box d="flex" flexDirection="column">
            <Heading fontSize="xl">{title}</Heading>
            <Text mt={4}>{author}</Text>
        </Box>
        <Box>
            <IconButton
            color="#1a202c"
            aria-label=""
            icon={<DeleteIcon />}
            marginRight="1rem"
            onClick={() => setIsOpen(true)}
            />
            <IconButton 
            color="#1a202c"
            aria-label=""
            icon={<EditIcon/>}
            onClick={handleEdit}
            />
        </Box>

        <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isCentered={true}
        >
      
            <AlertDialogOverlay>
            <AlertDialogContent>
                <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Delete Todo?
                </AlertDialogHeader>
                <AlertDialogBody>
                Are you sure? You can't undo this action afterwards.
                </AlertDialogBody>

                <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                    Cancel
                </Button>
                <Button colorScheme="red" onClick={handleDelete} ml={3}>
                    Delete
                </Button>
                </AlertDialogFooter>
            </AlertDialogContent>
            </AlertDialogOverlay>
        </AlertDialog>

    </Box>  
    
    );
}
 
export default TodoItem;