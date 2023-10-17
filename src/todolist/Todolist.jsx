import { Container, Divider, Typography } from '@mui/material'
import React, { useState } from 'react'
import TasksList from './TasksList'

const initialTasks = [
    {
      id: 1,
      title: 'Learn JS',
      done: true
    },
    {
      id: 2,
      title: 'Learn React',
      done: false
    }
  ]

export default function Todolist() {
    const [tasks, setTasks] = useState(initialTasks)
  return (
    <Container maxWidth='xl'>
      <Typography 
      variant='h4' 
      component='h1'
        sx={{
          my: 4,
          textAlign: 'center'
        }}
      >
          Personal task manager
      </Typography>
      <Divider></Divider> 
      <TasksList tasks={tasks} setTasks={setTasks} ></TasksList>     
    </Container>
  )
}
