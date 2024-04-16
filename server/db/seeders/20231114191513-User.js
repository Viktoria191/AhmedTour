const { hashSync } = require('bcrypt');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'Admin',
          email: 'admin@admin',
          hashpass: hashSync('1', 10),
          roleId: 1,
        },
        {
          name: 'Moderator',
          email: 'moderator@moderator',
          hashpass: hashSync('2', 10),
          roleId: 2,
        },
        {
          name: 'Nikita',
          email: 'nikita@nikita',
          hashpass: hashSync('nikita', 10),
          roleId: 3,
        },
        {
          name: '1',
          email: '1@1',
          hashpass: hashSync('1', 10),
          roleId: 3,
        },
        {
          name: 'Гоша',
          email: 'gosha@mail.ru',
          hashpass: hashSync('1', 10),
          roleId: 3,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
