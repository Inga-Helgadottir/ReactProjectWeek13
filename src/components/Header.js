import React from 'react'
import Button from './Button'

const Header = ({name, color}) => {
  return (
    <header className='Header'><h1>Pokemon To Do List</h1>
    <Button name={name} color={color} />
    </header>
  )
}

export default function Header();
