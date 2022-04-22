import UpdateEmployee from '../components/UpdateEmployee'

const UpdateEmployeePage = ({
  props,
  user,
  authenticated,
  jobs,
  employee,
  businessId
}) => {
  return (
    <div>
      <UpdateEmployee
        businessId={businessId}
        user={user}
        jobs={jobs}
        employee={employee}
      />
    </div>
  )
}

export default UpdateEmployeePage
