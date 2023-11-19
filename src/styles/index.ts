export const navbarTitleGroup = {
  flexGrow: 1,
  display: 'flex',
  alignItems: 'center',
}

export const navbarTitleButton = {
  borderRadius: 2,
  backgroundColor: '#3A39404D',
}
export const navbarTitle = {
  mt: 0,
  mb: 0,
  ml: 2,
  fontSize: 16,
  alignItems: 'baseline',
  fontFamily: 'Poppins',
  fontWeight: 500,
  color: 'inherit',
  textDecoration: 'none',
}

export const navbarSubtitle = {
  ml: 2,
  fontSize: 14,
  fontFamily: 'Poppins',
  color: '#d0cfd1',
}
export const navbarUserGroup = { display: 'flex', justifySelf: 'flex-end' }
export const navbarUserName = {
  ml: 2,
  fontSize: 14,
  alignItems: 'baseline',
  fontFamily: 'Poppins',
  fontWeight: 500,
  color: 'inherit',
  textAlign: 'right',
  textDecoration: 'none',
}

export const navbarChangeProfile = {
  ml: 2,
  fontSize: 10,
  alignItems: 'baseline',
  fontFamily: 'Poppins',
  fontWeight: 500,
  color: '#FF7DFF',
  textDecoration: 'underline',
}

export const autocompleteInput = {
  '& .MuiInputBase-root': {
    color: '#fff',
    borderRadius: 2,
    backgroundColor: '#3A394080',
    '&.Mui-focused fieldset': {
      borderRadius: 2,
      border: '1px solid transparent',
      borderImageSlice: 15,
      borderImageSource: 'linear-gradient(#523FD7, #FF7DFF)',
    },
  },
}

export const autocompleteStyle = {
  width: 300,
  borderRadius: 2,
  color: '#fff',
}

export const sliderBox = {
  width: 300,
  backgroundColor: '#09090d',
  borderRadius: 2,
  alignItems: 'center',
  display: 'flex',
}
export const sliderStyle = {
  '& .MuiSlider-valueLabel': {
    '&::before': {
      display: 'none',
    },
    color: '#fff',
    backgroundColor: '#523FD7',
    borderRadius: 4,
  },
  '& .MuiSlider-thumb': {
    color: '#FF7DFF',
  },
  '& .MuiSlider-track': {
    background: 'linear-gradient(to right, #523FD7, #FF7DFF)',
  },
}

export const sliderLabel = { color: '#fff', padding: 10 }

export const backButton = {
  width: '80%',
  mx: 2,
  px: 2,
  borderRadius: 10,
  backgroundColor: 'transparent',
  border: '1px solid #fff',
  color: '#fff',
}

export const nextButton = {
  width: '80%',
  m: 2,
  px: 2,
  borderRadius: 10,
  backgroundColor: '#fff',
  border: '1px solid #fff',
  '&:hover': {
    backgroundColor: '#fff',
  },
}

export const footerBackButton = {
  ml: 2,
  px: 2,
  borderRadius: 10,
  backgroundColor: 'transparent',
  border: '1px solid #fff',
  color: '#fff',
}

export const footerNextButton = {
  mr: 2,
  px: 2,
  borderRadius: 10,
  backgroundColor: '#fff',
  border: '1px solid #fff',
  '&:hover': {
    backgroundColor: '#fff',
  },
}

export const nextButtonArrowRight = {
  background: 'linear-gradient(to right, #523FD7, #FF7DFF)',
  textFillColor: 'transparent',
  backgroundClip: 'text',
}
