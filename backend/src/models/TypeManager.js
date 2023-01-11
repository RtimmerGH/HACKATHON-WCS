const AbstractManager = require("./AbstractManager");

class TypeManager extends AbstractManager {
  constructor() {
    super({ table: "type" });
  }

  findType(id) {
    return this.connection.query(`select * from  ${this.table} where id = ?`, [
      id,
    ]);
  }

  findAllTypes() {
    return this.connection.query(`select * from  ${this.table}`);
  }

  insert(type) {
    return this.connection.query(
      `insert into ${this.table} (name) values (?)`,
      [type.name]
    );
  }

  update(type) {
    return this.connection.query(
      `update ${this.table} set name = ?where id = ?`,
      [type.name, type.id]
    );
  }
}

module.exports = TypeManager;
