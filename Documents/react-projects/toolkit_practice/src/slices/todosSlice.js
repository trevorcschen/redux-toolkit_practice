import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    todoList: [
{
    id : '1',
    title : '1984',
    author : 'George Orwell'
},
{
    id:'2',
    title:"Harry Potter and the Philospher's Stone",
    author: "J.K. Rowling"
},
{
    id: '3',
    title: "The Lord of the Rings",
    author: "J.R.R Tolkien"
}
],
isActive : true
}
const todosSlice = createSlice({
    name : 'todos',
    initialState,
    reducers :
    {
        addNewBook : (state, action) =>
        {
            state.todoList.push(action.payload)
        },

        editTodo :(state,{payload})=>
        {

            const {title,author} = payload
            state.todoList = state.todoList.map((todo) => todo.id === payload.id ? {...todo, author, title}: todo)
        },
        deleteTodo : (state, action) =>
        {
            let filtered = state.todoList.filter((todo) => todo.id !== action.payload)
            return Object.assign({}, state, {todoList : filtered })
        }
    }

})

export const {addNewBook, deleteTodo, editTodo} = todosSlice.actions
export default todosSlice.reducer