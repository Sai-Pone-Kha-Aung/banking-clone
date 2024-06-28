import HeaderBox from '@/components/atoms/HeaderBox'
import BankCard from '@/components/organism/BankCard'
import { getAccounts } from '@/lib/actions/bank.action'
import { getLoggedInUser } from '@/lib/actions/user.actions'
import React from 'react'

const MyBanks = async () => {
  const loggedIn = await getLoggedInUser();
  const accounts = await getAccounts({
    userId: loggedIn.$id
  })
  return (
    <section className='flex'>
      <div className='my-banks'>
        <HeaderBox 
          title='My Banks' 
          subtext='Effortlessly manage your bank accounts from one place.'  
        />

        <div className='space-y-4'>
          <h2 className='header-2'>
            Your cards
          </h2>
          <div className='flex flex-wrap gap-6'>
            {accounts && accounts.data.map((acc: Account) => (
              <BankCard 
                account={acc} 
                key={accounts.id}
                userName={loggedIn?.firstName}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyBanks