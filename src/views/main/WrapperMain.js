import React from 'react'
import { Form } from './from/Form'
import { TodoList } from './list/TodoList'

export const WrapperMain = () => {

  const [todo , setTodo] = React.useState()

  const getTodo = (item)=>{
    setTodo(item)
  }

  return (
    <div className='wrapper-main-container'>
      <Form getTodo={getTodo}/>
      {/* <TodoList todo={todo}/> */}
    </div>
  )
}
