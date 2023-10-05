const db = require('./db');

class Model {
  constructor(attributes) {
    this.attributes = attributes || {};
    this.tableName = ''; 
  }

  async find(id) {
    try {
      const [rows] = await db.execute(`SELECT * FROM ${this.tableName} WHERE id = ?`, [id]);
      if (rows.length > 0) {
        this.attributes = rows[0];
        return this;
      }
      return null; 
    } catch (error) {
      throw error;
    }
  }

  async delete() {
    try {
      if (this.attributes.id) {
        await db.execute(`DELETE FROM ${this.tableName} WHERE id = ?`, [this.attributes.id]);
        return true; // Deletion was successful
      }
      return false; // No ID to delete
    } catch (error) {
      throw error;
    }
  }

  async save() {
    try {
      if (this.attributes.id) {
        const { id, ...updates } = this.attributes;
        await db.execute(`UPDATE ${this.tableName} SET ? WHERE id = ?`, [updates, id]);
      } else {
        const { id, ...values } = this.attributes;
        const [result] = await db.execute(`INSERT INTO ${this.tableName} SET ?`, [values]);
        this.attributes.id = result.insertId;
      }
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Model;