export type ID<T extends number | string = number> = T
export type DateAsIsoString = string

export type TransactionKind = 'expense' | 'revenue'

export type Account = {
  id: ID
  bank: string
  account: string
  balance: number
}

export type CreditCard = {
  id: ID
  name: string
  limit: number
  balance: number
  interestRate: number
  minimumPayment: number
  nextPaymentDate: DateAsIsoString
  type: 'card'
}

export type Loan = {
  id: ID
  name: string
  type: string
  monthlyPayment: number
  remainingBalance: number
  nextPaymentDate: DateAsIsoString
}

export type Transaction = {
  amount: number
  description: string
  type: TransactionKind
  timestamp: DateAsIsoString
}
