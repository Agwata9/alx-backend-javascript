export default function getListStudentIds(lstudents) {
  if (lstudents instanceof Array) {
    return lstudents.map((student) => student.id);
  }
  return [];
}
