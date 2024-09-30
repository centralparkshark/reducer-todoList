import './App.css'
import Item from './components/item'
import NewItem from './components/newItem'
import { initialState } from './data/data'
import { useReducer } from 'react'

let nextId = 1412353125;

function reduceData(state, action) {
  switch (action.type) {
    case 'delete': {
      return state.filter(item => item.id !== action.payload)
    } 
    case 'toggleComplete': {
      return state.map(item => 
        item.id === action.payload ? { ...item, completed: !item.completed } : item
      );
    }
    case 'edit': {
      return state.map(item =>
        item.id === action.payload.id ? { ...item, title: action.payload.newTitle } : item
      );
    }
    case 'add': {
      return [...state, { id: nextId++, title: action.payload, completed: false }]  }
    default:
      return state;
  }
}


function App() {
  const [items, dispatch] = useReducer(reduceData, initialState);

  const handleDelete = id => dispatch({ type: 'delete', payload: id });
  const handleToggleComplete = id => dispatch({ type: 'toggleComplete', payload: id });
  const handleEdit = (id, newTitle) => dispatch({ type: 'edit', payload: {id, newTitle} })
  const handleAdd = (newTitle) => dispatch({ type: 'add', payload: newTitle} )
 
  return (
    <div className="main">
      <h1>To Do List</h1>
      {items.map((item) => 
        <Item 
          key={item.id} 
          {...item} 
          onDelete={handleDelete}
          onToggleComplete={handleToggleComplete}
          onEdit = {handleEdit}
        />)}
      <NewItem onAdd={handleAdd} />
    </div>
  )
}

export default App
