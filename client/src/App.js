import React from 'react'
import './styles/global.css'
import Form from './components/Form/Form'
import Posts from './components/Posts/Posts'

const App = () => {
  return (
    <div>
      <h2>Movie Madness</h2>
      <Posts />
      <Form />
    </div>
  )
}

export default App