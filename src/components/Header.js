import React from 'react'
import Button from './Button'

const Header = ({name, color, onClick}) => {
  return (
    <header className='Header'><h1>Pokemon To Do List</h1>
    <Button 
    name={name ? "Add Task" : "Done"} 
    color={color ? "green" : "red"} 
    onClick={onClick}
    />
    </header>
  )
}

export default Header;
