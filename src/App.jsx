import './App.css'
import Item from './components/item'
import NewItem from './components/newItem'
import { initialState } from './data/data'

function App() {

  return (
    <div className="main">
      <h1>To Do List</h1>
      {initialState.map((item, index) => <Item key={index} {...item} />)}
      <NewItem/>
    </div>
  )
}

export default App
