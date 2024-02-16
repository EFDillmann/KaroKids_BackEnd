const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Usuarios",
    {
      usuario_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: UUIDV4,
      },
      //rol_id: FK
      email: {
        type: DataTypes.STRING(150),
        allowNull: false,
        isEmail: true, //Validador añadido.
      },
      inactivo: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
