import { Box,Button,Flex,Heading,Stack,Text} from "@chakra-ui/react"
import {Link} from 'react-router-dom'
import { useSelector} from 'react-redux';
import TodoItem from './TodoItem'
const Todos = ({match}) => {
    console.log(match)
    const todos = useSelector(state => state.todos.todoList)
    console.log(Object.keys(todos).length > 0)
    return (
        <Flex
          height="100vh"
          width="50vw"
        //   justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Box width="50%">
            <Box
              d="flex"
              flexDirection="row"
              justifyContent="space-between"
              marginBottom="20px"
            >
              <Heading color="white">Book List</Heading>
              <Link to="/add-new-todo">
                <Button paddingX="3rem" color="black">Add</Button>
              </Link>
            </Box>
            {(Object.keys(todos).length > 0 && todos) ?
                 <Box rounded="md" bg="purple.500" color="white" px="15px" py="15px">
              <Stack spacing={8}>
                  {Object.keys(todos).length > 0 &&
                    todos.map((data) =>
                    <TodoItem id={data.id} author={data.author} title={data.title} key={data.id}/>
                    )
                  }
              </Stack>
            </Box> 
            :
            <Box d="flex" justifyContent="center" alignItems="center" p ="15px">
              <Text>No Todo available</Text>
              </Box>
            }
       
          </Box>
        </Flex>
      );
}
 
export default Todos;