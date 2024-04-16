const { hashSync } = require('bcrypt');
const role = require('../models/role');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Comments',
      [
        {
          text: 'Тур четкий, только введите скидки для выпускников Эльбруса',
          tourId: 1,
          userId: 5,
        },
        {
          text: 'Тур четкий, только введите скидки для выпускников Эльбруса',
          tourId: 2,
          userId: 5,
        },
        {
          text: 'Тур четкий, только введите скидки для выпускников Эльбруса',
          tourId: 3,
          userId: 5,
        },
        {
          text: 'Тур четкий, только введите скидки для выпускников Эльбруса',
          tourId: 4,
          userId: 5,
        },
        {
          text: 'Тур четкий, только введите скидки для выпускников Эльбруса',
          tourId: 5,
          userId: 5,
        },
        {
          text: 'Тур четкий, только введите скидки для выпускников Эльбруса',
          tourId: 6,
          userId: 5,
        },
        {
          text: 'Тур четкий, только введите скидки для выпускников Эльбруса',
          tourId: 7,
          userId: 5,
        },
        {
          text: 'Тур четкий, только введите скидки для выпускников Эльбруса',
          tourId: 8,
          userId: 5,
        },
        {
          text: 'Тур четкий, только введите скидки для выпускников Эльбруса',
          tourId: 9,
          userId: 5,
        },
        {
          text: 'Тур четкий, только введите скидки для выпускников Эльбруса',
          tourId: 10,
          userId: 5,
        },
        {
          text: 'Тур четкий, только введите скидки для выпускников Эльбруса',
          tourId: 11,
          userId: 5,
        },
        {
          text: 'Тур четкий, только введите скидки для выпускников Эльбруса',
          tourId: 12,
          userId: 5,
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
