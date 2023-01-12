const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  findUser(id) {
    return this.connection.query(
      `select ${this.table}.id, ${this.table}.firstname, ${this.table}.lastname, ${this.table}.email, ${this.table}.admin, admin.name as role from  ${this.table} join admin on admin.id=${this.table}.admin where ${this.table}.id = ?`,
      [id]
    );
  }

  findAllUsers() {
    return this.connection.query(
      `select ${this.table}.id, ${this.table}.firstname, ${this.table}.lastname, ${this.table}.email, ${this.table}.admin, admin.name as role from  ${this.table} join admin on admin.id=${this.table}.admin `
    );
  }

  insert(user) {
    return this.connection.query(
      `insert into ${this.table} (firstname, lastname, email, hashedPassword) values (?,?,?,?)`,
      [user.firstname, user.lastname, user.email, user.hashedPassword]
    );
  }

  update(user) {
    return this.connection.query(
      `update ${this.table} set firstname = ?, lastname = ?, email = ?, admin = ? where id = ?`,
      [user.firstname, user.lastname, user.email, user.admin, user.id]
    );
  }

  updatePassword(user) {
    return this.connection.query(
      `update ${this.table} set hashedPassword = ? where id = ?`,
      [user.hashedPassword, user.id]
    );
  }

  getUserByEmail(email) {
    return this.connection.query(
      `select firstname,lastname,email, hashedPassword, id, admin from ${this.table} where email = ?`,
      [email]
    );
  }
}

module.exports = UserManager;
