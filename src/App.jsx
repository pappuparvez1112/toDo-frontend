import { useEffect, useState } from 'react'
import ToDo from './components/ToDo.jsx'

import './App.css'

import { getAllToDo,addToDo,updateToDo,deleteToDo} from './utils/handleApi'

function App() {
  const [toDo, setToDo] = useState([])  
  const [text, setText] = useState("")
  const [isUpdate, setIsUpdate] = useState(false)
  const [toDoId, setToDoId] = useState("")


  useEffect(()=>{
    getAllToDo(setToDo)
  },[])

  const updateMode=(_id,text)=>{
    setIsUpdate(true)
    setText(text)
    setToDoId(_id)
  }
  return (
    <div className="App">
     <div className="container">
     <h1>TODO-APP</h1>
     <div className="top">
      <input type="text"
       placeholder='Add todos'
       value={text}
       onChange={(e)=>setText(e.target.value)}
       />
      <div className="add" onClick={
        isUpdate?
        ()=>updateToDo(toDoId,text,setToDo,setText,setIsUpdate)
         : ()=>addToDo(text,setText,setToDo)}>
        { isUpdate ? "Update" : "Add"}
        
        </div>
     </div>
     <div className="list">
     {
        toDo.map(item=>(
          
          <ToDo
            key={item._id}
            text={item
            .text}
            updateMode={()=>updateMode(item._id,item.text)}
            deleteTodo={()=>deleteToDo(item._id,setToDo)}
          />          
        )         
      )} 
      
     </div>
     </div>
      
    </div>
  )
}

export default App
