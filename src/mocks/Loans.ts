import type { Loan } from 'types'

export default <Loan[]>[
  {
    id: 1,
    name: 'Plaid Student',
    type: 'loan',
    monthlyPayment: 13805,
    remainingBalance: 6526200,
    nextPaymentDate: new Date(
      `${new Date().getMonth() + 1}/10/${new Date().getFullYear()}`,
    ).toISOString(),
  },
  {
    id: 2,
    name: 'Plaid Mortgage',
    type: 'mortgage',
    monthlyPayment: 314154,
    remainingBalance: 5630206,
    nextPaymentDate: new Date(
      `${new Date().getMonth() + 1}/15/${new Date().getFullYear()}`,
    ).toISOString(),
  },
]
