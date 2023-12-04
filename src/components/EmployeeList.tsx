
interface EmployeeProfile{
  id: number;
  name: string;
  age: number;
  gender: string
}

interface IEmployeeList{
  employees: Array<EmployeeProfile>;
  department?: string;
  manager?: string;
}

const EmployeeList = ({
  employees,
  manager = 'Bill Gates II'
}: IEmployeeList) => {
  return (
    <>
    <h2>Manager: {manager}</h2>
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody>
        {
          employees.map((emp) => {
            return (
              <tr>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.age}</td>
                <td>{emp.gender}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
    </>
  )
}

export default EmployeeList