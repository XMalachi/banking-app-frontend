import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Layout from './components/Layout/Layout'
import BankingLayout from "./components/OnlineBanking/Layout/Layout"
import PlanningLayout from './components/PlanningPages/Layout/PlanningLayout'
import AboutScreen from './components/Screens/AboutScreen'
import ContactScreen from './components/Screens/ContactScreen'
import Homescreen from './components/Screens/Homescreen'
import LoginScreen from './components/Screens/LoginScreen'
import AccountDetailsScreen from './components/Screens/OnlineBankingScreens/AccountDetailsScreen'
import AccountStatsScreen from './components/Screens/OnlineBankingScreens/AccountStatsScreen'
import EnrollScreen from './components/Screens/OnlineBankingScreens/EnrollScreen'
import FundTransferScreen from './components/Screens/OnlineBankingScreens/FundTransferScreen'
import LoanApplicationScreen from './components/Screens/OnlineBankingScreens/LoanApplicationScreen'
import SummaryScreen from './components/Screens/OnlineBankingScreens/SummaryScreen'
import ViewCardScreen from './components/Screens/OnlineBankingScreens/ViewCardScreen'
import ViewLoanScreen from './components/Screens/OnlineBankingScreens/ViewLoanScreen'
import ViewTransfersScreen from './components/Screens/OnlineBankingScreens/ViewTransfersScreen'
import CommoditiesScreen from './components/Screens/PlanningScreens/CommoditiesScreen'
import InsuranceScreen from './components/Screens/PlanningScreens/InsuranceScreen'
import InvestmentScreen from './components/Screens/PlanningScreens/InvestmentScreen'
import MutualScreen from './components/Screens/PlanningScreens/MutualScreen'
import RetirementScreen from './components/Screens/PlanningScreens/RetirementScreen'
import SecureScreen from './components/Screens/PlanningScreens/SecureScreen'
import TaxScreen from './components/Screens/PlanningScreens/TaxScreen'
import WealthScreen from './components/Screens/PlanningScreens/WealthScreen'
import RegistrationScreen from './components/Screens/RegistrationScreen'
import ServicesScreen from './components/Screens/ServicesScreen'



function Router() {
  
  
  return (
    
    <div>

        
        <Routes>
            <Route path='/' element={<Layout><Homescreen /></Layout>} />
            <Route path='/about' element={<Layout><AboutScreen /></Layout>} />
            <Route path='/services' element={<Layout><ServicesScreen/></Layout>} />
            <Route path='/contact' element={<Layout><ContactScreen/></Layout>} />
            
          {/* planning screens */}
            <Route path='/services/tax' element={<Layout><PlanningLayout><TaxScreen/></PlanningLayout></Layout>} />
            <Route path='/services/investment' element={<Layout><PlanningLayout><InvestmentScreen /></PlanningLayout></Layout>} />
            <Route path='/services/retirement' element={<Layout><PlanningLayout><RetirementScreen /></PlanningLayout></Layout>} />
            <Route path='/services/secure' element={<Layout><PlanningLayout><SecureScreen /></PlanningLayout></Layout>} />
            <Route path='/services/commodities' element={<Layout><PlanningLayout><CommoditiesScreen/></PlanningLayout></Layout>} />
            <Route path='/services/mutualfunds' element={<Layout><PlanningLayout><MutualScreen /></PlanningLayout></Layout>} />
            <Route path='/services/wealth' element={<Layout><PlanningLayout><WealthScreen /></PlanningLayout></Layout>} />
            <Route path='/services/insurance' element={<Layout><PlanningLayout><InsuranceScreen /></PlanningLayout></Layout>} />
            
    {/* dashboard routes */}
            <Route path='/customer' element={<BankingLayout><SummaryScreen /></BankingLayout>} />
            <Route path='/login' element={<LoginScreen />} />
            <Route path='/register' element={<RegistrationScreen />} />

            <Route path='/customer/details' element={<BankingLayout><AccountDetailsScreen /></BankingLayout>} />
            <Route path='/customer/stats' element={<BankingLayout><AccountStatsScreen /></BankingLayout>} />
            
            <Route path='/customer/transfer' element={<BankingLayout><FundTransferScreen /></BankingLayout>} />
            <Route path='/customer/viewtransfer' element={<BankingLayout><ViewTransfersScreen /></BankingLayout>} />
            
            <Route path='/customer/card-enroll' element={<BankingLayout><EnrollScreen /></BankingLayout>} />
            <Route path='/customer/viewcard' element={<BankingLayout><ViewCardScreen /></BankingLayout>} />
            
            
            <Route path='/customer/applyloan' element={<BankingLayout><LoanApplicationScreen /></BankingLayout>} />
            <Route path='/customer/viewloans' element={<BankingLayout><ViewLoanScreen /></BankingLayout>} />
            
        </Routes>
        
       

       

    </div>
  )
}

export default Router