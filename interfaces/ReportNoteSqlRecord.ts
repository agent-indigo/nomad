import SqlRecord from '@/interfaces/SqlRecord'
export default interface ReportNoteSqlRecord extends SqlRecord {
  report_id: string
  account_id: string
  content: string
}