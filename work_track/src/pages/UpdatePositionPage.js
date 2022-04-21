import UpdatePosition from '../components/UpdatePosition'

const UpdatePositionPage = ({
  props,
  user,
  authenticated,
  jobs,
  businessId
}) => {
  return (
    <div>
      <div>
        <UpdatePosition jobs={jobs} user={user} businessId={businessId} />
      </div>
    </div>
  )
}

export default UpdatePositionPage
