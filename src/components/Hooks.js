import { type } from '../App';
export default function NewPost({task,dispatch}) {

  return (
    <div className='new-task'>
      <div>
        {task.toggle?<h3>{task.name}</h3>:<h3>Item hidden</h3>}
      </div>
      <button onClick={()=>dispatch({type:type.TOGGLE, payload:{id:task.id}})}>Toggle</button>
    </div>
  )
}