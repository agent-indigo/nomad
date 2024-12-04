import {
  DataTypes,
  Model,
  QueryInterface
} from 'sequelize'
import AdminActionLogSqlRecord from '@/interfaces/AdminActionLogSqlRecord'
import createId from '@/utilities/createId'
import createTimeStamps from '@/utilities/createTimeStamps'
export const up: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.createTable<Model<AdminActionLogSqlRecord>>(
  'admin_action_logs', {
    ...createId(),
    account_id: {
      type: DataTypes.TEXT,
      allowNull: true,
      references: {
        model: 'Account',
        key: 'id'
      }
    },
    target_type: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    target_id: {
      type: DataTypes.TEXT,
      allowNull: true,
      references: {
        model: 'Account',
        key: 'id'
      }
    },
    action: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    recorded_changes: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    ...createTimeStamps()
  }
)
export const down: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.dropTable('admin_action_logs')