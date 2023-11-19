import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined'
import {
  navbarChangeProfile,
  navbarSubtitle,
  navbarTitle,
  navbarTitleButton,
  navbarTitleGroup,
  navbarUserGroup,
  navbarUserName,
} from '../styles'

const Navbar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={navbarTitleGroup}>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              sx={navbarTitleButton}
            >
              <ArrowBackIcon />
            </IconButton>
            <div>
              <Typography sx={navbarTitle}>
                Media management
                <DriveFileRenameOutlineOutlinedIcon sx={{ pt: 1 }} />
              </Typography>
              <Typography sx={navbarSubtitle}>Draft campaign</Typography>
            </div>
          </Box>
          <Box sx={navbarUserGroup}>
            <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
              <div style={{ marginRight: 6 }}>
                <Typography sx={navbarUserName}>Habib</Typography>
                <Typography sx={navbarChangeProfile}>Change Profile</Typography>
              </div>
            </Box>

            <IconButton sx={{ p: 0 }}>
              <Avatar alt="Habib Sabir" src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default Navbar
