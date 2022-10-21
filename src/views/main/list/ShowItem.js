import React from 'react'
import { Typography, Button, Tooltip } from '@mui/material'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import PlaylistRemoveIcon from '@mui/icons-material/PlaylistRemove';
import AppsIcon from '@mui/icons-material/Apps';
import { ACTIONS } from './../from/Form';
import swal from 'sweetalert';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import RemoveDoneIcon from '@mui/icons-material/RemoveDone';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DescriptionIcon from '@mui/icons-material/Description';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';

export const ShowItem = ({ todo, dispatch }) => {

    const remove = (id) => {
        swal({
            title: "Are you sure?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Your todo deleted", {
                        icon: "success",
                    });
                    dispatch({ type: ACTIONS.REMOVE_TODO, payload: { id: id } })
                } else {
                    swal("Your todo is safe");
                }
            });
    }

    const handleUnCompleted = (id) => {
        dispatch({ type: ACTIONS.COMPLETE, payload: { id: id } })
        toast.success('Add to UnCompleted ✘', {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    const handleCompleted = (id) => {
        dispatch({ type: ACTIONS.COMPLETE, payload: { id: id } })
        toast.success('Add to Completed ✔', {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    console.log(todo);

    return (
        <>
            {todo.map((item, index) => {
                return (
                    <div className='maneger' key={index} >
                        <div className='list'>
                            <Tooltip title={item.complete ? 'task Completed' : 'UnCompleted'}>
                                <AppsIcon sx={item.complete ? { color: '#87e5c3', cursor: 'pointer' } : { color: '#ba9ef7', cursor: 'pointer' }} onClick={item.complete ? () => handleUnCompleted(item.id) : () => handleCompleted(item.id)} />
                            </Tooltip>
                            <section>
                                <div>
                                    <Typography sx={{ color: '#374150' }} variant='p'>{item.todo}</Typography>
                                    <Typography className='show-task' sx={{ color: '#62a5f7', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px', fontSize: '14px' }}>show task <ArrowRightAltIcon /></Typography>
                                </div>
                                <Typography sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}><DescriptionIcon sx={{ color: '#62a5f7' }} />{item.describtion}</Typography>
                                <Typography sx={{ fontSize: '13px', color: '#AAA' }}>created: {item.date}</Typography>
                            </section>
                            <div className='btn-wrapper'>
                                {item.complete ?
                                    <Tooltip title='task Completed'>
                                        <DoneAllIcon sx={{ color: '#87e5c3', cursor: 'pointer' }} onClick={() => handleUnCompleted(item.id)} />
                                    </Tooltip>
                                    :
                                    <Tooltip title='Uncompleted'>
                                        <RemoveDoneIcon sx={{ color: '#ba9ef7', cursor: 'pointer' }} onClick={() => handleCompleted(item.id)} />
                                    </Tooltip>
                                }
                                <Tooltip title='Edit' sx={{ cursor: 'pointer', color: '#62a5f7' }}>
                                    <AutoFixHighIcon onClick={() => dispatch({type : ACTIONS.EDIT_TODO , payload : {id : item.id}})}/>
                                </Tooltip>
                                <Tooltip title='delete todo'>
                                    <PlaylistRemoveIcon sx={{ color: '#ff4f4f', fontSize: '28px', cursor: 'pointer' }} onClick={() => remove(item.id)} />
                                </Tooltip>
                            </div>
                        </div>
                    </div>
                )
            })}
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
        </>
    )
}