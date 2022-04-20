import UpdateEntry from '../components/UpdateEntry'

const UpdateEntryPage = ({
  entry,
  employees,
  user,
  authenticated,
  businessId
}) => {
  return (
    <div>
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
