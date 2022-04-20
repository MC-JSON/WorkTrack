import UpdateBusiness from '../components/UpdateBusiness'

const UpdateBusinessPage = ({ props, user, authenticated }) => {
  console.log('props: ', props)
  return (
    <div>
      <h1>Update Business</h1>

      <div>
        <UpdateBusiness businesses={props.businesses} />
      </div>
    </div>
  )
}

export default UpdateBusinessPage
