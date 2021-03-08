class List {
  id;

  label;

  position;

  description;

  user_id;

  constructor(data) {
    for (const prop in data) {
      this[prop] = data[prop];
    }
  }
}

module.exports = List;
