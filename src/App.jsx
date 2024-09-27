import './App.css'
import Item from './components/item'
import NewItem from './components/newItem'

function App() {

  return (
    <div className="main">
      <h1>To Do List</h1>
      <Item task="Finish assignment"/>
      <Item task="Commit to gitHub"/>
      <Item task="Check"/>
      <Item task="Lofsdfjksdhfsjkfjshke fshdfkjsdfhsdfkl"/>
      <NewItem/>
    </div>
  )
}

export default App
