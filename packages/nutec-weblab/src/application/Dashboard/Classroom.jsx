import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import some from 'lodash/some'
import filter from 'lodash/filter'
import { Nav } from 'nutec-ui'
import { addUser, userJoined, getUsers } from './socket'
import { ClassroomWrapper, ClassroomContent, ClassroomDivider, StudentNavItem, NavItem } from './styled'
import { DashboardActions } from './state/action';

const renderStudentNavItem = (currentUser, user) => {

  return (
    <StudentNavItem key={user.id} control={user.control}>
      {user.name}
      {currentUser.isMaestro && !user.control && <i class="fas fa-gamepad"></i>}
    </StudentNavItem>
  )
}

const Classroom = ({ currentUser, setUserData }) => {
  const[users, setUsers] = useState([]);

  useEffect(() => {
    userJoined((user) => setUserData(user));
    addUser('Maycon Pacheco', false, false);
    getUsers((users) => setUsers(users));
  }, []);

  return (
    <ClassroomWrapper>
      <ClassroomContent>
        <Nav>
          {users && filter(users, { isMaestro: true }).map(user => (
            <NavItem key={user.id} control={user.control}>{user.name}</NavItem>
          ))}
          <ClassroomDivider />
          {users && filter(users, { isMaestro: false }).map(
            user => renderStudentNavItem(currentUser, user)
          )}
        </Nav>
      </ClassroomContent>
    </ClassroomWrapper>
  )
}

const mapProps = ({ dashboard: { user: currentUser} }) => ({
  currentUser
})

const mapActions = {
  setUserData: DashboardActions.setUserData,
}

export default connect(mapProps, mapActions)(Classroom)
