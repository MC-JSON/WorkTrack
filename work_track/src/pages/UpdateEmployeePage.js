import UpdateEmployee from '../components/UpdateEmployee'

const UpdateEmployeePage = ({ props, user, authenticated, jobs, employee, businessId }) => {

  return (

    <div>
      <h1>Update Employee</h1>
      <div>
        <UpdateEmployee businessId={businessId} user={user} jobs={jobs} employee={employee} />
      </div>
    </div>
  )




}

export default UpdateEmployeePage