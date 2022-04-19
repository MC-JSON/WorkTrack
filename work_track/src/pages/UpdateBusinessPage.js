import UpdateBusiness from '../components/UpdateBusiness'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateBusinessPage = ({ props, user, authenticated }) => {

  return (

    <div>
      <h1>Update Business</h1>

      <div>
        <UpdateBusiness
        />
      </div>
    </div>
  )




}

export default UpdateBusinessPage