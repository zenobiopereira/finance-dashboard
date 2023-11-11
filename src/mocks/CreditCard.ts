import type { CreditCard } from 'types'

export default <CreditCard[]>[
  {
    id: 111,
    name: 'Plaid Credit Card',
    limit: 200000,
    balance: 41000,
    interestRate: 5,
    minimumPayment: 2000,
    nextPaymentDate: new Date(
      `${new Date().getMonth() + 1}/${
        new Date().getDay() + 1
      }/${new Date().getFullYear()}`,
    ).toISOString(),
    type: 'card',
  },
]
