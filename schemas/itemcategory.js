'use strict';

// TODO: delete me, as this table is automatically created by Sequelize

module.exports = (sequelize, DataTypes) => {
  const ItemCategory = sequelize.define(
    'ItemCategory',
    {
      item_id: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      category_id: {
        allowNull: false,
        type: DataTypes.INTEGER
      }
    },
    {}
  );
  ItemCategory.associate = function(models) {
    ItemCategory.belongsTo(models.Item, { as: 'item', foreignKey: 'item_id' });
    ItemCategory.belongsTo(models.Category, {
      as: 'category',
      foreignKey: 'category_id'
    });
  };
  return ItemCategory;
};
