import {getPosts, getPostByID, removePosts, addNewPost, createNewPost, fetchPosts} from '../slices/blogSlices'
import axios from 'axios'
import React, { useEffect,useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Input, Flex, Button} from '@chakra-ui/react'
const Blog = () => {
    const dispatch = useDispatch();
    const {blogs} = useSelector((state) => state.blog) 
    const {searchedBlogs} = useSelector((state) => state.blog)
    const [searchedID, setID] = useState(0)
    const [postContent , setPost] = useState({title: '', body:'', author: '', id : ''})
    useEffect(()=>
    {
      dispatch(fetchPosts())
      return () =>
      {
          dispatch(removePosts())
      }
    }, [])

    // useEffect(() =>
    // {
    //   if(typeof searchedBlogs !== "undefined" && Object.keys(searchedBlogs).length > 0)
    //   {
    //     // console.log(searchedBlogs[0].title)
    //     // searchedBlogs.map((item) => console.log(item))
    //           blogs.map((item,key)=> console.log(item))
    //       let q = blogs.filter((item) => item.author ==='mario')
    //       q = q.map((item) => item)
    //       console.log(q)

    //   }
    // },[searchedBlogs])
    const handleSearch = () =>
    {
      axios.get(`http://127.0.0.1:8000/blogs/${searchedID}`)
      .then((res) =>
      {
        console.log(`http://127.0.0.1:8000/blogs/${searchedID}`)
        dispatch(getPostByID(res.data.id))
      } )
      .catch((err) => console.log(err))

    }
    const handleNewPost = () =>
    {
        let newID = blogs.reduce((acc, curr) => (acc = curr.id), 0) +1
        postContent.id = newID
        postContent.author = 'mario'
        console.log(newID)
        dispatch(createNewPost(postContent))
    }
    return (
         <div>
           <div style={{margin:30}}>
             <Flex justifyContent="center" alignItems="center" flexDirection="column">
             <Input type="text" w={"15vw"} m={"12px 0"}placeholder="enter title" onChange= {(e) => setPost((prevState) => ({...prevState, title: e.target.value}))}/>
             <Input type="text"  w={"15vw"} placeholder="body" onChange= {(e) => setPost((prevState) => ({...prevState, body: e.target.value}))} />
             </Flex>
             <button className ="btn btn-primary" onClick={() => handleNewPost()}>Add new Post</button>
           </div>
        
        <Input type="text" onChange={(e)=> setID(e.target.value)} placeholder='Search Post by ID' />
        <Button backgroundColor={'#ff6700'} _hover={{backgroundColor:'#ff6700'}} onClick={() => handleSearch()}>Search Post by ID</Button>

        {blogs &&
        <div>
            {blogs.map((item,key) =>
            <div key ={key}>
                <label>{item.title}</label>
            </div>
            )}
        </div>
        }
        {searchedBlogs &&
        <div>
                  {searchedBlogs.map((item, key) => 
                  <div key={key}>
                  <label>{item.title}</label>
                  <textarea defaultValue={item.body}></textarea>
                  </div>
                  )}
        </div>
          }
    </div> );
}
 
export default Blog;