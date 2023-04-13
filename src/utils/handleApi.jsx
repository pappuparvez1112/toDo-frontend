import axios from 'axios'

const baseUrl="https://todo-app-backend-gn1b.onrender.com"

const getAllToDo=(setToDo)=>{
    axios
    .get(baseUrl)
    .then(({data})=>{
        console.log(data);
        setToDo(data)
    })
}
const addToDo=(text,setText,setToDo)=>{
    axios
    .post(`${baseUrl}/save`,{text})
    .then((data)=>{
        // const arrayOfObjects = [Object.fromEntries(Object.entries(data))];
        // console.log('data...',arrayOfObjects);
        
        setText("")
        getAllToDo(setToDo)
        
    })

}

const updateToDo=(toDoId,text,setToDo,setText,setIsUpdate)=>{
    axios
    .post(`${baseUrl}/update`,{_id:toDoId, text})
    .then((data)=>{
        // const arrayOfObjects = [Object.fromEntries(Object.entries(data))];
        // console.log('data...',arrayOfObjects);
        
        setText("")
        setIsUpdate(false)
        getAllToDo(setToDo)
    })

}

const deleteToDo=(_id,setToDo)=>{
    axios
    .post(`${baseUrl}/delete`,{_id})
    .then((data)=>{
        getAllToDo(setToDo)
    })

}
export{getAllToDo,addToDo,updateToDo,deleteToDo}