export default function createEmployeesObject(departmentName, employees) {
  const empObj = {};
  empObj[departmentName] = employees;
  return empObj;
}
