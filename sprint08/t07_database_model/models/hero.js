const Model = require('../model'); 

class Hero extends Model {
  constructor(attributes) {
    super(attributes);
    this.tableName = 'heroes'; 
  }
}

module.exports = Hero;