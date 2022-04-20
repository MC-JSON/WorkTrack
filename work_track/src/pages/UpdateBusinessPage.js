import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import UpdateBusiness from '../components/UpdateBusiness'

const UpdateBusinessPage = ({
  setBusinesses,
  businesses,
  user,
  authenticated
}) => {
  return (
    <div>
      <UpdateBusiness
        businesses={businesses}
        setBusinesses={setBusinesses}
        user={user}
      />
    </div>
  )
}

export default UpdateBusinessPage
