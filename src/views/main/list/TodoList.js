import React from 'react'
import { Typography} from '@mui/material'
import { ShowItem } from './ShowItem';

export const TodoList = ({ todo, dispatch }) => {

    const [filterList, setFilterList] = React.useState(todo)

    React.useEffect(() => {
        setFilterList(todo)
    }, [todo])

    const handleFilter = (filter) => {
        if (filter === 'Completed') {
            const completedList = todo.filter(q => q.complete === true)
            setFilterList(completedList)
        } else if (filter === 'Uncompleted') {
            const unCompletedList = todo.filter(q => q.complete === false)
            setFilterList(unCompletedList)
        } else if (filter === 'All') {
            setFilterList(todo)
        }
    }

    return (
        <div className='todo-container'>
            <div className='top-section'>
                <Typography sx={{ color: '#374150' }}>Todo list</Typography>
                <div className='filter-section'>
                    <Typography sx={{ color: '#374150' }} className='query-none'>Filter by status</Typography>
                    <select className="option" onChange={(e) => handleFilter(e.target.value)}>
                        <option value='All'>All</option>
                        <option value='Completed'>Completed</option>
                        <option value='Uncompleted'>Uncompleted</option>
                    </select>
                </div>
            </div>
            <div className='list-section'>
                <ShowItem todo={filterList} dispatch={dispatch}/>
            </div>
        </div>
    )
}