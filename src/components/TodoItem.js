import { useState, useContext } from 'react'
import { TodoContext } from '../todoContext';
import '../css/todoItem.css'

export function TodoItem({item}) {
  const {editItem} = useContext(TodoContext)
  const [readOnly, setReadOnly] = useState(true);
  const [newValue, setNewValue] = useState(item);

  return (
    <div className="todoItem">
      <div className="round">
        <input type="checkbox" id="checkbox" />
        <label for="checkbox"></label>
      </div>
      <form>

      <input id="text" type="text" value={newValue.text} autoFocus={!readOnly} readOnly={readOnly} onChange={async ({target})=>{ await setNewValue((prev) => prev.text = target.value); editItem(newValue)}}/>
      {
        readOnly ? <button onClick={(e) =>{ e.preventDefault();setReadOnly(false)}}>Editar</button>
        : <button onClick={(e) => {e.preventDefault();setReadOnly(true)}}>Finalizar</button>
      }
      <button>Excluir</button>
      </form>
    </div>
  )
}