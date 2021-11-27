import React from 'react'
import theme from '../theme'
import Header from '../header'
import { ThemeProvider } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container maxWidth="lg">
        <Box my={4} sx={{ height: '100vh' }}>
          {children}
        </Box>
      </Container>
    </ThemeProvider>
  )
}
