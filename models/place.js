const Sequelize = require('sequelize');
const db = require('./_db');

const Place = db.define('place', {
	address: Sequelize.STRING,
	city: Sequelize.STRING,
	state: Sequelize.STRING,
	phone: Sequelize.STRING,
	location: Sequelize.ARRAY(Sequelize.DOUBLE)
}, {
  getterMethods: {
    lat: function() { return this.location[0]; },
    lng: function() { return this.location[1]; }
  }
});

module.exports = Place;
