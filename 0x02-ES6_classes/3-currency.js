export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // getters
  get code() {
    return this._code;
  }
  get name() {
    return this._name;
  }

  // setters
  set code(code) {
    this._code = code;
  }
  set name(name) {
    this._name = name;
  }

  // methods
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}

