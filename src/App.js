import React, { useEffect,useState } from 'react'
import axios from "axios";
import Post from "./Post";
export default function App() {
   let [posts, setPosts] = useState("")
    useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(res=>{
      if(res&&res.data){
        setPosts(posts=res.data)
      }
    }).catch(err=>{
      console.log(err)
    })
    },[])
    let post = posts?(posts.map(post=>{
     return <Post post={post} key={post.id} />
    })):(<p>loading</p>)
  return (
    <div style={{marginLeft:"5%",display:"block"}}>
      <h1 style={{textAlign:'center',fontSize:"100px",marginLeft:"-8%"}}>Posts</h1>
      {post}
    </div>
  )
}
