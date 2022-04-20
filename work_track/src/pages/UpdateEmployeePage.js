const UpdateEmployeePage = ({ props, user, authenticated }) => {
  //on-click navigate to that employee page -- page with form to update or delete employee--buttononclick

  return (
    <div>
      <h1>Which employee would you like to update?</h1>
      <form onSubmit={handleSubmit}>
        <select
          className="create-form-select"
          name="employeeId"
          onChange={handleChange}
        >
          {employees.map((employee) => (
            <option value={employee.id}>{employee.employeeName}</option>
          ))}
        </select>
      </form>
    </div>
  )
}

export default UpdateEmployeePage
