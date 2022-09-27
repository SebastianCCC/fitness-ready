import { createContext, useMemo, useState } from 'react'

const StateContext = createContext()

const StateProvider = ({ children }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const value = useMemo(() => ({ email, setEmail, password, setPassword }), [email, password])
  return <StateContext.Provider value={value}>{children}</StateContext.Provider>
}
export { StateProvider, StateContext }
