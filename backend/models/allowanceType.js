"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class AllowanceType extends Model {
        static associate(models) {
            AllowanceType.hasMany(models.EmployeeAllowance, {
                foreignKey: "allowance_id"
            })
        }

    }
    AllowanceType.init(
        {
            allowance_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            allowance_name: {
                type: DataTypes.STRING(100),
                allowNull: false,
                unique: true,
            },
            is_fixed: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            amount: {
                type: DataTypes.DECIMAL(15, 0),
                allowNull: true,
            },
        },
        {
            sequelize,
            modelName : "AllowanceType",
            tableName : "allowance_types",
            timestamps : true,
            createdAt : "created_at",
            updatedAt : "updated_at",
            deletedAt : "deleted_at",
            paranoid : true
        }
    );
    return AllowanceType;
}