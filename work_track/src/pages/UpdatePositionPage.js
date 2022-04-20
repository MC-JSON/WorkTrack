const UpdatePositionPage = ({ props, user, authenticated }) => {
  //on-click navigate to that job page -- page with form to update or delete job -- button onclick

  return (
    <div>
      <h1>Which job would you like to update?</h1>
      <form onSubmit={handleSubmit}>
        <select
          className="create-form-select"
          name="jobId"
          onChange={handleChange}
        >
          {jobs.map((job) => (
            <option value={job.id}>{job.jobTitle}</option>
          ))}
        </select>
      </form>
    </div>
  )
}

export default UpdatePositionPage
