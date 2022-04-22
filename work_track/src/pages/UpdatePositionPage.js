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
      <UpdatePosition jobs={jobs} user={user} businessId={businessId} />
    </div>
  )
}

export default UpdatePositionPage
