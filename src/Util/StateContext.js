import { createContext, useMemo, useState } from 'react'

const StateContext = createContext()

const StateProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [workouts, setWorkouts] = useState([])

  const value = useMemo(() => ({ user, setUser, workouts, setWorkouts }), [user, workouts])
  return <StateContext.Provider value={value}>{children}</StateContext.Provider>
}
export { StateProvider, StateContext }
