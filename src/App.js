import { useReducer, useRef, useState } from 'react';
import './App.css';
import Hooks from './components/Hooks';

export const type = {
  Add_Task:"add-post",
  TOGGLE: "toggle",
}


function App() {

  function newTask(name){
    return {id:Date.now(), name:name, toggle:true}
  }
  
  function reducer(tasks,action){
    switch(action.type){
      case type.Add_Task:
        return [...tasks, newTask(action.payload.name)]

      case type.TOGGLE:
        return tasks.map(task=>{
          if(task.id===action.payload.id){
            return {...task, toggle:!task.toggle}
          }
          else{
            return task
          }
        })

    }
  
  }

  const [tasks, dispatch] = useReducer(reducer,[]);
  const [name, setName] = useState(" ");
  const inputRef = useRef();

  function handleSubmit(e){
    e.preventDefault();
    dispatch({type:type.Add_Task, payload:{name:name}});
    setName(" ");
  }

  function focus(){
    inputRef.current.focus();
  }

  return(
    <div>

      <form onSubmit={handleSubmit}>
        <input ref={inputRef} type="text" value={name} onChange={e=>setName(e.target.value)}></input>
      </form>

      {
        tasks.map(task=>{
          return <Hooks key={task.id} task={task} dispatch={dispatch}/>
        })
      }

      <button onClick={focus}>Back</button>

    </div>

  )

}

export default App;
