import UpdateEntry from '../components/UpdateEntry'

const UpdateEntryPage = ({
  entry,
  employees,
  user,
  authenticated,
  businessId
}) => {
  return (
    <div className='update-entry-page'>
      <h1>Update Entry</h1>
      <div>
        <UpdateEntry
          entry={entry}
          employees={employees}
          user={user}
          businessId={businessId}
        />
      </div>
    </div>
  )
}

export default UpdateEntryPage
