import React, { Component } from "react"
import PostList from "./API/PostLIst"
import axios from "axios"


class App extends Component {
    constructor(props){
      super(props)

      this.state={
        postData: []
      }
    }
     componentDidMount(){
       axios.get('https://jsonplaceholder.typicode.com/posts')
       .then(response=>{
         this.setState({
           postData: response.data
         })
         console.log(response.data)
       })
     }

   
  render() {
    const {postData} = this.state
    return (
      <div>
        <PostList />
        {postData.map(post=>{
          return(<div key={post.id}>{post.title}</div>)
        })}
      </div>
    )
  }
}

export default App