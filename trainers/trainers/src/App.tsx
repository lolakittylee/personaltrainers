import { useState } from 'react'

import NewCustomer from './components/newCustomer'
import CustomersListed from './components/customers'
import { AppBar, Button, Container, Toolbar, Typography } from '@mui/material'
import { Link, Outlet } from 'react-router'
import TrainingsListed from './components/training'


function App() {


  return (
    <>
      <Container maxWidth="lg">
        <AppBar position='static' sx={{ md: 2 }}>
          <Toolbar>
            <Typography variant='h6'> Customers </Typography>
          </Toolbar>
        </AppBar>
        {/* <Outlet/> */}
        <CustomersListed />
        {/* <TrainingsListed */}
      </Container>

    </>
  )
}

export default App
