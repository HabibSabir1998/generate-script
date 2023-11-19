import { createTheme } from '@mui/material'

const myTheme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#09090d',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        colorPrimary: {
          '&:hover': {
            backgroundColor: '#523fd7',
          },
          backgroundColor: '#523fd7',
        },
        colorSecondary: {
          backgroundColor: 'brown',
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          backgroundColor: '#3A394080' + '!important',
          '&:hover': {
            borderColor: "linear-gradient('#523FD7', '#FF7DFF')",
          },
        },
        paper: {
          backgroundColor: '#3A3940',
          color: '#fff',
          borderRadius: 5
        },
        option: {
          '& .MuiAutocomplete-option': {
            background: '#3A394080',
            fontFamily: 'Poppins',
          },
          '&.Mui-focused ': {
            backgroundColor: '#523FD7',
          },
          '&[data-focus="true"]': {
            backgroundColor: '#3A394080',
            borderColor: 'transparent',
          },
          padding: 10,
          backgroundColor: '#3A394080',
          display: 'flex',
          height: 42,
          '&:hover': {
            backgroundColor: '#523FD7',
            color: '#fff',
          },
          '& .Mui-selected': {
            backgroundColor: '#FF7DFF',
            color: '#fff',
          },
        },
      },
    },
  },
})

export default createTheme(myTheme)
