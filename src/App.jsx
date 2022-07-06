import React from 'react'
import './App.css'
import Countries from './components/Countries'
import Header from './components/Header'
import Search from './components/Search'

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Countries />
    </div>
  )
}

export default App
