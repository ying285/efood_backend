module.exports = (sequelize, DataTypes) => {
    const Products = sequelize.define("Products", {
      title: DataTypes.STRING,
      price: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      imageUrl: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      extraInfo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      returnInfo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      shippingInfo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      skuCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      deal:{
        type:DataTypes.STRING,
      },
  
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      rabatt: {
        type: DataTypes.STRING,
      },
    });
  
    return Products;
  };
  