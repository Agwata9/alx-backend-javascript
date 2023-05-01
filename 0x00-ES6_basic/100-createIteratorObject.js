export default function createIteratorObject(report) {
  const employees = report.employees;
  const departments = Object.keys(employees);
  let departmentIndex = 0;
  let employeeIndex = 0;

  const iterator = {
    next: function() {
      if (departmentIndex >= departments.length) {
        return { done: true };
      }

      const department = departments[departmentIndex];
      const employee = employees[department][employeeIndex];
      const result = { value: employee, done: false };

      employeeIndex++;

      if (employeeIndex >= employees[department].length) {
        employeeIndex = 0;
        departmentIndex++;
      }

      return result;
    }
  };

  return iterator;
}

