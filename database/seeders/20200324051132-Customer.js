'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Customers', 
			[
				{
					full_name: 'Ricky',
					username: 'ricky',
					email: 'ricky@email.com',
					phone_number: '08155559890',
					createdAt: new Date(),
          updatedAt: new Date()
				},
				{
					full_name: 'Nugroho aji',
					username: 'nugroho',
					email: 'nugroho@email.com',
					phone_number: '0812598837',
					createdAt: new Date(),
          updatedAt: new Date()
				}
			], {});
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Customers', null, {});
  }
};
