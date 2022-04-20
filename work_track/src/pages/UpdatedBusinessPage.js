import UpdateBusiness from '../components/UpdateBusiness'

const UpdatedBusinessPage = ({ props, user, authenticated }) => {
  return (
    <div>
      <h1>Update Business Information</h1>
      <div>
        <UpdateBusiness />
      </div>
    </div>
  )
}

export default UpdatedBusinessPage
