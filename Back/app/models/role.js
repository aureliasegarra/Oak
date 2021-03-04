class Role {
  id;

  role;

  constructor(data) {
    for (const prop in data) {
      this[prop] = data[prop];
    }
  }
}

module.exports = Role;
