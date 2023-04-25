export default function getStudentsByLocation(lstudents, city) {
  if (lstudents instanceof Array) {
    return lstudents.filter((student) => student.location === city);
  }
  return [];
}
