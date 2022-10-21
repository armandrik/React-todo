import React from 'react'
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import logo from '../../images/Screenshot 2022-09-30 221111.png';
import { Tooltip, Typography , Box} from '@mui/material';
// import { Box } from '@mui/material/Box';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));

export default function BadgeAvatars() {
    return (
        <Box sx={{display : 'flex' , alignItems : 'center' , gap: '10px' , alignSelf : 'flex-start'}}>
            <Tooltip title='Arman Drik' sx={{ cursor: 'pointer' }}>
                <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    variant="dot"
                >
                    <Avatar alt="Remy Sharp" src={logo} sx={{ width: 56, height: 56 }} />
                </StyledBadge>
            </Tooltip>
            <Typography variant='h6'>Arman Drik</Typography>
        </Box>
    );
}