const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.trim().split('\n');
        const fields = lines[0].split(',');
        const students = {};

        for (let i = 1; i < lines.length; i++) {
          const values = lines[i].split(',');

          if (values.length === fields.length) {
            for (let j = 0; j < fields.length; j++) {
              const field = fields[j];
              const value = values[j].trim();

              if (!students[field]) {
                students[field] = {
                  count: 1,
                  list: [value]
                };
              } else {
                students[field].count++;
                students[field].list.push(value);
              }
            }
          }
        }

        console.log(`Number of students: ${lines.length - 1}`);

        for (const field in students) {
          console.log(`Number of students in ${field}: ${students[field].count}. List: ${students[field].list.join(', ')}`);
        }

        resolve();
      }
    });
  });
}

module.exports = countStudents;

