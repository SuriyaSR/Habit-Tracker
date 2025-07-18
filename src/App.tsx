import { Provider } from 'react-redux'
import './App.css'
import store from './store/store'
import { Container, Typography } from '@mui/material'
import AddHabit from './components/add-habit-form'
import HabitList from './components/habit-list'
import HabitStats from './components/habit-stats'

function App() {

  return (
    <Provider store={store}>
      <Container maxWidth="md">
        <Typography variant="h2" component="h1" align='center'>
          Habit Tracker
        </Typography>
        <AddHabit />
        <HabitList />
        <HabitStats />
      </Container>
    </Provider>
  )
}

export default App
