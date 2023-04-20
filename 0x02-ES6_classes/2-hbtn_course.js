class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;

    if (typeof this._name !== "string") {
      throw new TypeError("Name must be a string");
    }
    if (typeof this._length !== "number") {
      throw new TypeError("Length must be a number");
    }
  }

  // getters
  get name() {
    return this._name;
  }
  get length() {
    return this._length;
  }
  get students() {
    return this._students;
  }

  // setters
  set name(newName) {
    if (typeof newName !== 'string') throw TypeError('name must be a string');
    this._name = newName;
  }

  set length(newLength) {
    if (typeof newLength !== 'number') throw TypeError('length must be a number');
    this._length = newLength;
  }

  set students(newStudents) {
    if (newStudents.constructor !== Array && newStudents.every((el) => typeof el === 'string')) {
      throw TypeError('students must be an array of strings');
    }
    this._students = newStudents;
  }
}
