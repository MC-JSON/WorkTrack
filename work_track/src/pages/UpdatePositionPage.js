import UpdatePosition from '../components/UpdatePosition'

const UpdatePositionPage = ({ props, user, authenticated }) => {
  return (
    <div className='update-position-page'>
      <h1>Update Position</h1>
      <div>
        <UpdatePosition />
      </div>
    </div>
  )
}

export default UpdatePositionPage
