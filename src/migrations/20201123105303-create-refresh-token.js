module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('RefreshTokens', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      AppId: {
        type: Sequelize.UUID,
      },
      token: {
        type: Sequelize.TEXT('long'),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('RefreshTokens')
  },
}
