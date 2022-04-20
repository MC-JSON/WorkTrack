import UpdatePosition from '../components/UpdatePosition'

const UpdatePositionPage = ({ props, user, authenticated, positions }) => {
  return (
    <div>
      <h1>Update Position</h1>
      <div>
        <UpdatePosition positions={positions} />
      </div>
    </div>
  )
}

export default UpdatePositionPage
