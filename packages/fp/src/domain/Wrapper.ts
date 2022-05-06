export class Wrapper {
  _value: unknown;
  constructor(value: unknown) {
    this._value = value;
  }
  map(f) {
    return f(this._value);
  }
  fmap(f) {
    return new Wrapper(f(this._value));
  }
  toString() {
    return "Wrapper (" + this._value + ")";
  }
}

export const wrap = (value) => new Wrapper(value);
