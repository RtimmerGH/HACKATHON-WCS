const AbstractManager = require("./AbstractManager");

class AdminManager extends AbstractManager {
  constructor() {
    super({ table: "admin" });
  }

  findAdmin(id) {
    return this.connection.query(`select * from  ${this.table} where id = ?`, [
      id,
    ]);
  }

  findAllAdmins() {
    return this.connection.query(`select * from  ${this.table}`);
  }

  insert(admin) {
    return this.connection.query(
      `insert into ${this.table} (name) values (?)`,
      [admin.name]
    );
  }

  update(admin) {
    return this.connection.query(
      `update ${this.table} set name = ?where id = ?`,
      [admin.name, admin.id]
    );
  }
}

module.exports = AdminManager;
