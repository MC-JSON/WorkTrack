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
      <UpdateEntry
        entry={entry}
        employees={employees}
        user={user}
        businessId={businessId}
      />
    </div>
  )
}

export default UpdateEntryPage
