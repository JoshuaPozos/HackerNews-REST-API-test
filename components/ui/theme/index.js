import { createTheme } from '@mui/material/styles'

const hNpurple = '#512DA8'
const hNpurpleLight = '#673AB7'
const hNblue = '#2196F3'

export default createTheme({
  palette: {
    common: {
      purple: `${hNpurple}`,
      purpleLight: `${hNpurpleLight}`,
      blue: `${hNblue}`,
    },
    primary: {
      main: `${hNpurpleLight}`,
    },
    secondary: {
      main: `${hNblue}`,
    },
  },
})
