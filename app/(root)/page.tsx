import HeaderBox from "@/components/atoms/HeaderBox"
import TotalBalanceBox from "@/components/atoms/TotalBalanceBox"

const HomePage = () => {
  const loggedIn = {firstName: "John"}
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
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1000}
          />
        </header>
      </div>
    </section>
  )
}

export default HomePage