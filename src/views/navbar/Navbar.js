import React from 'react'
import { Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';

export const Navbar = () => {
  return (
    <div className='navbar'>
      <a href='#'>
        <HomeIcon sx={{color : '#1f76cf' , fontSize : '32px'}}/>
      </a>
      <a href='https://github.com/armandrik'>
        <GitHubIcon sx={{color : '#1f76cf' , fontSize : '26px'}}/>
      </a>
      <a href='https://www.instagram.com/arman.drik/'>
        <InstagramIcon sx={{color : '#1f76cf' , fontSize : '26px'}}/>
      </a>
      <a href='https://www.linkedin.com/in/arman-drik-930460217/'>
        <LinkedInIcon sx={{color : '#1f76cf' , fontSize : '26px'}}/>
      </a>
      <a href='https://twitter.com/Armandriik'>
        <TwitterIcon sx={{color : '#1f76cf' , fontSize : '26px'}}/>
      </a>
    </div>
  )
}
