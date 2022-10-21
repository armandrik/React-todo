import React from 'react'
import BadgeAvatars from './Avatar'
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import { Typography } from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';


export const Header = () => {
  return (
    <div className='header'>
        <BadgeAvatars/>
        <Typography sx={{display : 'flex' , alignItems : 'center' , gap : '10px' , fontSize : '20px' , color : '#121212'}}><PlaylistAddCheckIcon/> Task Manager</Typography>
        <div className='guid'>
          <Typography sx={{display : 'flex' , alignItems : 'center' , color : '#121212'}}><AppsIcon sx={{color : '#ba9ef7'}}/> Uncomplete</Typography>
          <Typography sx={{display : 'flex' , alignItems : 'center' , color : '#121212'}}><AppsIcon sx={{color : '#87e5c3'}}/> Complete</Typography>
        </div>
    </div>
  )
}
