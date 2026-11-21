import { useState } from 'react'

import NewCustomer from './components/newCustomer'
import CustomersListed from './components/customers'
import Link from '@mui/material/Link'
import { Container, Toolbar, Typography } from '@mui/material'


function App() {


  return (
    <>
      <Container>
        <Toolbar>
          <Typography>

            <nav>
              <Link to={"/newCustomer"}> New customer</Link>
            </nav>
            <CustomersListed />
          </Typography>
        </Toolbar>
      </Container>
    </>
  )
}

export default App
