import { useState ,useContext } from 'react'
import { TodoItem } from './TodoItem';
import {  TodoContext } from '../todoContext';


const Todo = () => {
  const {all, confirmed, active, deleted, add} = useContext(TodoContext);
  const [input, setInput] = useState();
  const style = {

  }

  return (
    <main>
      <h1>To Do</h1>
      <form>
        <input type="text" name="itemToDo" id="itemToDo" placeholder='Activity' value={input} onChange={({target})=>{setInput(target.value)}} />
        <button type="submit" hidden onClick={async (e)=>{
          e.preventDefault();
          if(input){
            await add(input);
            await setInput("");
          }
        }}></button>
      </form>
      <div style={{display: 'flex', flexDirection: 'column', gap: '4px'}}>
        {
          active.map((x) => (
            <TodoItem item={x} />
          ))
        }
      </div>
      {
        all &&
          <div>
            <button>All</button>
            <button>Active</button>
            <button>Confirmed</button>
            <button>Deleted</button>
          </div>
      }
      {
        active.length >= 1 && active[0] !== null && <h2>{active[0].text}</h2>
      }
    </main>  
  )
}

export default Todo