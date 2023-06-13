const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.trim().split('\n');
    
    if (lines.length === 0) {
      throw new Error('The database is empty');
    }
    
    const header = lines[0].split(',');
    const students = lines.slice(1);
    const studentCount = students.length;
    
    console.log(`Number of students: ${studentCount}`);
    
    header.forEach((field, index) => {
      const fieldStudents = students
        .map((student) => student.split(',')[index])
        .filter((value) => value !== '');
      
      console.log(`Number of students in ${field}: ${fieldStudents.length}. List: ${fieldStudents.join(', ')}`);
    });
  } catch (error) {
    console.error(`Cannot load the database: ${error.message}`);
  }
}

countStudents('database.csv');
