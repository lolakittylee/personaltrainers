import { useState } from 'react'

import NewCustomer from './components/newCustomer'
import CustomersListed from './components/customers'
import Link from '@mui/material/Link'
import { Container, Toolbar, Typography } from '@mui/material'


function App() {


  return (
    <>
      <Container maxWidth="lg">
        <Toolbar>
          <Typography variant='h6'> Customers </Typography>
        </Toolbar>
        <CustomersListed/>
      </Container>
    </>
  )
}

export default App
