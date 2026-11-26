import { useState } from 'react'

import NewCustomer from './components/newCustomer'
import CustomersListed from './components/customers'
import Link from '@mui/material'
import { AppBar, Button, Container, Toolbar, Typography } from '@mui/material'


function App() {


  return (
    <>
      <Container maxWidth="lg">
        <AppBar position='static' sx={{md:2}}>
        <Toolbar>
          <Typography variant='h6'> Customers </Typography>
          <nav>
            <Link href={"/trainings"}>Trainings</Link>
          </nav>
        </Toolbar>
        </AppBar>
        <CustomersListed/>
      </Container>
    </>
  )
}

export default App
