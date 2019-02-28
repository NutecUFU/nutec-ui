import React from 'react'
import { Nav } from 'nutec-ui'
import { ClassroomWrapper, ClassroomContent, NavItem } from './styled'

const Classroom = () => {

  const list = [
    'Maycon pacheco',
    'Lucas',
    'Gabriel',
    'Matheus',
    'Joao',
  ]

  return (
    <ClassroomWrapper>
      <ClassroomContent>
        <Nav>
          {list && list.map(item => (
            <NavItem key={item}>{item}</NavItem>
          ))}
        </Nav>
      </ClassroomContent>
    </ClassroomWrapper>
  )
}

export default Classroom
