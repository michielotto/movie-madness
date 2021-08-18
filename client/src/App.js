import React from 'react'
import './styles/global.css'

import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Auth from './components/Auth/Auth'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Layout } from './components/Layout/Layout'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Layout>
          <Route path='/' exact component={Home}/>
          <Route path='/auth' exact component={Auth}/>
        </Layout>
      </Switch>
    </BrowserRouter>
  )
}

export default App