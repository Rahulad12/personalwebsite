import React from 'react'
import {useSelector} from 'react-redux'
import {Container} from 'react-bootstrap'
import { Outlet,Navigate } from 'react-router-dom'
import NotAuthorized from '../NotAuthorized'; // Adjust the path accordingly


const AdminRoute = () => {
  const {userInfo} = useSelector(state => state.auth)
  
const token = userInfo?.token

  return  token ? (
    <div>
      <Outlet />
    </div>
  ) : (
    <Container>
      <NotAuthorized />
    </Container>
  )
}

export default AdminRoute;
