import UpdateEntry from '../components/UpdateEntry'

const UpdateEntryPage = ({ entry, employees, user, authenticated }) => {
  return (
    <div>
      <h1>Update Entry</h1>
      <div>
        <UpdateEntry entry={entry} employees={employees} />
      </div>
    </div>
  )
}

export default UpdateEntryPage
