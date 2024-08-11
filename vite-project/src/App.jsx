import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Content from './Content'

function App() {
  const person = {
    "name" : "John",
    "id" : 3,
    "isMarried" : false,
    "age" : 40
  }

  const message = "Who's here please?"

  return (
    <>
    <Content persons = {person}
    messages = {message}/>
      
    </>
  )
}

export default App
