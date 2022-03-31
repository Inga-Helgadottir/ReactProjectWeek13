import React from 'react'
import Button from './Button'

const Header = ({onAdd, showAdd}) => {
  return (
    <header className='Header'><h1>Pokemon To Do List</h1>
    <Button 
    name={showAdd ? "Done" : "Add Task" } 
    color={showAdd ? "red" : "green" } 
    onClick={onAdd}
    />
    </header>
  )
}

export default Header;
