import HeaderBox from "@/components/atoms/HeaderBox"
import TotalBalanceBox from "@/components/atoms/TotalBalanceBox"
import RightSidebar from "@/components/organism/RightSidebar"
import { getLoggedInUser } from "@/lib/actions/user.actions"

const HomePage = async() => {
  const loggedIn = await getLoggedInUser();
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type="greeting"
            title="Welcome to MWE Bank"
            user={loggedIn?.name || "Guest"}
            subtext="Access & manage your account and transactions efficiently"
          />

          <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1000}
          />
        </header>
        RECENT TRASACTIONS
      </div>
      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance: 123.66}, {}]}

      />
    </section>
  )
}

export default HomePage