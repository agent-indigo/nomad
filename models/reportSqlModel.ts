import {
  DataTypes,
  Model,
  ModelStatic
} from 'sequelize'
import sequelize from '@/config/sequelize'
import ReportSqlRecord from '@/interfaces/ReportSqlRecord'
import createId from '@/utilities/createId'
const reportSqlModel: ModelStatic<Model<ReportSqlRecord>> = sequelize.models.Report ?? sequelize.define<Model<ReportSqlRecord>>(
  'Report', {
    ...createId(),
    account_id: {
      type: DataTypes.TEXT,
      allowNull: false,
      references: {
        model: 'Account',
        key: 'id'
      }
    },
    target_account_id: {
      type: DataTypes.TEXT,
      allowNull: false,
      references: {
        model: 'Account',
        key: 'id'
      }
    },
    action_taken_by_account_id: {
      type: DataTypes.TEXT,
      allowNull: true,
      references: {
        model: 'Account',
        key: 'id'
      }
    },
    assigned_account_id: {
      type: DataTypes.TEXT,
      allowNull: true,
      references: {
        model: 'Account',
        key: 'id'
      }
    },
    status_ids: {
      type: [DataTypes.TEXT],
      references: {
        model: 'Status',
        key: 'id'
      }
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    action_taken: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    uri: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'reports',
    timestamps: true
  }
)
reportSqlModel.hasOne(
  sequelize.models.Account, {
    foreignKey: 'account_id'
  }
)
reportSqlModel.hasOne(
  sequelize.models.Account, {
    foreignKey: 'target_account_id'
  }
)
reportSqlModel.hasOne(
  sequelize.models.Account, {
    foreignKey: 'action_taken_by_account_id'
  }
)
reportSqlModel.hasOne(
  sequelize.models.Account, {
    foreignKey: 'assigned_to_account_id'
  }
)
reportSqlModel.hasMany(
  sequelize.models.Status, {
    foreignKey: 'status_ids'
  }
)
export default reportSqlModel