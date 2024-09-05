export type SeverityType = 'success' | 'warning' | 'error' | 'info'

export interface ToastType {
  id?: string
  title?: string
  severity: SeverityType
  message: string
}
