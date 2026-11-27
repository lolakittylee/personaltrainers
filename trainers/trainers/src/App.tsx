
import CustomersListed from './components/customers'
import { AppBar, Container, Toolbar, Typography } from '@mui/material'
import { BrowserRouter, Routes, Route } from 'react-router'
import TrainingsListed from './components/training'
import CustomerIndividual from './components/customer'


function App() {


  return (
    <>
    <BrowserRouter>
      <Container maxWidth="lg">
        <AppBar position='static' sx={{ md: 2 }}>
          <Toolbar>
            <Typography variant='h6'> Personal trainer's data </Typography>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route path='/' element={<CustomersListed/>}/>
          <Route path='/customers' element={<CustomersListed/>}/>
          <Route path="/customers/:id" element={<CustomerIndividual/>} />
          <Route path='/trainings' element={<TrainingsListed/>}/>
        </Routes>
      </Container>
    </BrowserRouter>
    </>
  )
}

export default App
