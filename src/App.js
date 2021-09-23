import axios from "axios";

const App = () => {

  axios.defaults.baseURL= 'https://reqres.in/api'

  const getData = async ()=>{
    try{
      const res = await axios.get('/users')
      console.log(res.data.data)
    } catch(err){
      console.log(err)
    }
  }

  const postData = async ()=>{
    try{
      const res = await axios.post('/users',{
        name:'Boris Marinov',
        job: 'Junior React developer',
        age: 41
      })
      console.log(res)
    } catch(err){
      console.log(err)
    }
  }

  const updateDtata = async ()=>{
    try{
      const res = await axios.put('/2',{
        name: 'Peter Gorniski',
        job : 'Senior developer',
        age: 39
      })
      console.log(res)
    } catch(err){
      console.log(err)
    }
  }


  const deleteData = async ()=>{
    try{
      const res = await axios.delete('/2')
      console.log(res.status)
    } catch(err){
      console.log(err)
    }
  }

  return ( <div>
    <h1>App component</h1>

    <button onClick={getData}>Get data</button>
    <button onClick={postData}>Post data</button>
    <button onClick={updateDtata}>Update data</button>
    <button onClick={deleteData}>Delete data</button>

  </div> );
}
 
export default App;