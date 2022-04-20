import UpdateEmployee from '../components/UpdateEmployee'

const UpdateEmployeePage = ({ props, user, authenticated, employees }) => {

  return (

    <div>
      <h1>Update Employee</h1>
      <div>
        <UpdateEmployee user={user} employees={employees} />
      </div>
    </div>
  )




}

export default UpdateEmployeePage