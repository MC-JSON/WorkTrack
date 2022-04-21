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
