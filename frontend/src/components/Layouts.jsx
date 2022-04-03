import React from 'react'
import RequireAuth from '../context/RequireAuth';
import Header from './Header'

const Layouts = ({children}) => {
  return (
    <RequireAuth>
        <Header/>
        {children}
    </RequireAuth>
  )
}

export default Layouts;