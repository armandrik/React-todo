import React from 'react'
import './sass/App.css';
import { Header } from './views/header/Header';


const ACTIONS = {
  ADD_TODO: 'add-todo',
  REMOVE_TODO: 'remove-todo',
  EDIT_TODO: 'edit-todo',
  COMPLETE: 'complete'
}

const reducer = (todos, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)]
    case ACTIONS.REMOVE_TODO:
      return todos.filter(q => q.id !== action.payload.id)
    case ACTIONS.EDIT_TODO:
      return todos.map(item =>{
        if(item.id === action.payload.id){
          return {...item , complete : !item.complete}
        }
        return item
      })
    case ACTIONS.COMPLETE:
      return todos.map(item =>{
        if(item.id === action.payload.id){
          return {...item , editMode : !item.editMode}
        }
        return item
      })
    default:
      return todos;
  }
}

const newTodo = (name) => {
  return { id: Date.now(), todo: name, complete: false, editMode: false , type : '' , describtion : ''}
}

function App() {

  const [todos, dispatch] = React.useReducer(reducer, [])
  const [name, setName] = React.useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } })
    setName('')
  }

  console.log(todos);

  return (
    <div className="App">
      <Header/>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        {todos.map(item => {
          return (
            <div key={item.id} style={{display : 'flex' , justifyContent : 'space-evenly' , alignItems:'center'}}>
              <p style={{color : item.editMode ? '#AAA' : '#000'}}>{item.todo}</p>
              <button type='button' onClick={() => dispatch({type : ACTIONS.REMOVE_TODO , payload : {id : item.id}})}>x</button>
              <button type='button' onClick={() => dispatch({type : ACTIONS.EDIT_TODO , payload : {id : item.id}})}>edit</button>
              <button type='button' onClick={() => dispatch({type : ACTIONS.COMPLETE , payload : {id : item.id}})}>complete</button>
            </div>
          )
        })}
      </form>
    </div>
  );
}

export default App;
