/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Tours", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.TEXT,
      },
      body: {
        type: Sequelize.TEXT,
      },
      description: {
        type: Sequelize.TEXT,
      },
      price: {
        type: Sequelize.INTEGER,
      },
      currentPlace: {
        type: Sequelize.INTEGER,
      },
      allPlace: {
        type: Sequelize.INTEGER,
      },
      date: {
        type: Sequelize.TEXT,
      },
      days:{
        type: Sequelize.TEXT,
      },
      regionId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Regions",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      photoTourId: {
        type: Sequelize.INTEGER,
        references: {
          model: "PhotoTours",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Tours");
  },
};
