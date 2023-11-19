import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import AdbIcon from '@mui/icons-material/Adb'
import { AccountCircle } from '@mui/icons-material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined'

const pages = ['Products', 'Pricing', 'Blog']
const settings = ['Profile', 'Account', 'Dashboard', 'Logout']

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null,
  )

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              alignItems: 'center',
              display: { xs: 'flex', md: 'flex' },
            }}
          >
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              sx={{ borderRadius: 2, backgroundColor: '#3A39404D' }}
            >
              <ArrowBackIcon />
            </IconButton>
            <div>
              <Typography
                sx={{
                  ml: 2,
                  fontSize: 16,
                  alignItems: 'baseline',
                  fontFamily: 'Poppins',
                  fontWeight: 500,
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                Media management
                <DriveFileRenameOutlineOutlinedIcon sx={{ pt: 1 }} />
              </Typography>
              <Typography
                sx={{
                  ml: 2,
                  fontSize: 14,
                  fontFamily: 'Poppins',
                  color: '#d0cfd1',
                }}
              >
                Draft campaign
              </Typography>
            </div>
          </Box>
          <Box sx={{ display: 'flex', justifySelf: 'flex-end' }}>
            <div style={{marginRight:6}}>
              <Typography
                sx={{
                  ml: 2,
                  fontSize: 14,
                  alignItems: 'baseline',
                  fontFamily: 'Poppins',
                  fontWeight: 500,
                  color: 'inherit',
                  textAlign: 'right',
                  textDecoration: 'none',
                }}
              >
                Habib
              </Typography>
              <Typography
                sx={{
                  ml: 2,
                  fontSize: 10,
                  alignItems: 'baseline',
                  fontFamily: 'Poppins',
                  fontWeight: 500,
                  color: '#FF7DFF',
                  textDecoration: 'underline',
                }}
              >
                Change Profile
              </Typography>
            </div>

            <IconButton sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default Navbar
