const AbstractManager = require("./AbstractManager");

class CategoryManager extends AbstractManager {
  constructor() {
    super({ table: "category" });
  }

  findCategory(id) {
    return this.connection.query(`select * from  ${this.table} where id = ?`, [
      id,
    ]);
  }

  findAllCategories() {
    return this.connection.query(`select * from  ${this.table}`);
  }

  insert(brand) {
    return this.connection.query(
      `insert into ${this.table} (name) values (?)`,
      [brand.name]
    );
  }

  update(brand) {
    return this.connection.query(
      `update ${this.table} set name = ?where id = ?`,
      [brand.name, brand.id]
    );
  }
}

module.exports = CategoryManager;
