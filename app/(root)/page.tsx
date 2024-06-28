import HeaderBox from "@/components/atoms/HeaderBox"
import TotalBalanceBox from "@/components/atoms/TotalBalanceBox"
import RecentTransitions from "@/components/organism/RecentTransitions"
import RightSidebar from "@/components/organism/RightSidebar"
import { getAccount, getAccounts } from "@/lib/actions/bank.action"
import { getLoggedInUser } from "@/lib/actions/user.actions"

const HomePage = async({ searchParams : { id, page } } : SearchParamProps) => {
  const currentPage = Number (page) || 1;
  const loggedIn = await getLoggedInUser();
  const accounts = await getAccounts({ userId: loggedIn.$id });

  if(!accounts) return;

  const accountsData = accounts?.data;
  const appwriteItemId = ( id as string) || accountsData[0]?.appwriteItemId

  const account = await getAccount({ appwriteItemId });

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type="greeting"
            title="Welcome to MWE Bank"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access & manage your account and transactions efficiently"
          />

          <TotalBalanceBox 
            accounts={accountsData}
            totalBanks={accounts?.totalBanks}
            totalCurrentBalance={accounts?.totalCurrentBalance}
          />
        </header>
        <RecentTransitions
          accounts={accountsData}
          transactions={account?.transactions}
          appwriteItemId={appwriteItemId}
          page={currentPage}
        />
      </div>
      <RightSidebar
        user={loggedIn}
        transactions={account?.transactions}
        banks={accountsData?.slice(0, 2)}
      />
    </section>
  )
}

export default HomePage