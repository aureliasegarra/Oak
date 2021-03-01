class User {
    id;
    username;
    email;
    avatar;
    password;
    role_id;

    constructor(data) {
        for (const prop in data) {
            this[prop] = data[prop];
        }
    }
}

module.exports = User;