import React from 'react'
import { Typography, Button, TextField, Tooltip } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SelectType from './SelectType';
import { TodoList } from '../list/TodoList';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ACTIONS = {
    ADD_TODO: 'add-todo',
    REMOVE_TODO: 'remove-todo',
    EDIT_TODO: 'edit-todo',
    COMPLETE: 'complete',
}

const reducer = (todos, action) => {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...todos, newTodo(action.payload.name, action.payload.describe, action.payload.type, action.payload.date)]
        case ACTIONS.REMOVE_TODO:
            return todos.filter(q => q.id !== action.payload.id)
        case ACTIONS.COMPLETE:
            return todos.map(item => {
                if (item.id === action.payload.id) {
                    return { ...item, complete: !item.complete }
                }
                return item
            })
        case ACTIONS.EDIT_TODO:
            return todos.map(item => {
                if (item.id === action.payload.id) {
                    return { ...item, editMode: !item.editMode }
                }
                return item
            })
        default:
            return todos;
    }
}

const newTodo = (name, describe, type, date) => {
    return { id: Date.now(), todo: name, complete: false, editMode: false, describtion: describe, type: type, date: date }
}


export const Form = ({ getTodo }) => {

    const [todos, dispatch] = React.useReducer(reducer, [
        { id: 1, todo: 'Work Out', complete: false, editMode: false, describtion: 'Day 13 of 30', type: 'personal', date: '10/18/2022 - 21:34:53' },
        { id: 2, todo: 'Study English', complete: true, editMode: false, describtion: '7 days to exam', type: 'school', date: '10/18/2022 - 20:14:12' },
        { id: 3, todo: 'Bussiness Meeting', complete: true, editMode: false, describtion: 'Dont late its Important', type: 'school', date: '10/18/2022 - 15:45:23' },
        { id: 4, todo: 'Date', complete: false, editMode: false, describtion: '6pm on max coffeShop', type: 'school', date: '10/18/2022 - 13:15:45' },
    ])
    const [name, setName] = React.useState('')
    const [describe, setDescribe] = React.useState('')
    const [todoType, setTodoType] = React.useState('')

    const getType = (tt) => {
        setTodoType(tt)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (name === '' || describe === '' || todoType === 'task-type') {
            toast.info('Please fill all inputs =)', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } else {
            const d = new Date()
            let year = d.getFullYear()
            let mounth = d.getMonth()
            let day = d.getDate()
            let hour = d.getHours();
            let minutes = d.getMinutes();
            let seconds = d.getSeconds();
            const currentDate = `${mounth + 1}/${day}/${year} - ${hour}:${minutes}:${seconds}`
            dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name, describe: describe, type: todoType, date: currentDate } })
            setName('')
            setDescribe('')
        }
    }

    React.useEffect(() => {
        getTodo(todos)
    }, [todos])

    return (
        <form className='form-container' onSubmit={handleSubmit}>
            <div className='top-section-add'>
                <Typography variant='p' sx={{ fontSize: '18px', color: '#111826', fontWeight: '600' }}>Todos</Typography>
                <Tooltip title='add new todo'>
                    <Button startIcon={<AddIcon />} variant='contained' type='submit' sx={{ width: '200px' }}>New</Button>
                </Tooltip>
            </div>
            <div className='input'>
                <input placeholder='+ Task title...' value={name} onChange={(e) => setName(e.target.value)} />
                <SelectType getType={getType} />
            </div>
            <textarea rows='5' placeholder='Discription...' value={describe} onChange={(e) => setDescribe(e.target.value)}></textarea>
            <TodoList todo={todos} dispatch={dispatch} />
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover={false}
                theme="light"
            />
        </form>
    )
}