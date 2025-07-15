import { Provider } from 'react-redux'
import './App.css'
import store from './store/store'
import { Container, Typography } from '@mui/material'

function App() {

  return (
    <Provider store={store}>
      <Container maxWidth="md">
        <Typography variant="h2" component="h1" align='center'>
          Habit Tracker
        </Typography>
        
      </Container>
    </Provider>
  )
}

export default App
