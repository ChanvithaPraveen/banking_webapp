import './App.css';
import Login from './components/Login';
import Registration from './components/Registration';
import AccountBalances from './components/AccountBalances';
import BillPayment from './components/BillPayment';
import TransactionHistory from './components/TransactionHistory';
import FundTransfer from './components/FundTransfer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/account-balances" element={<AccountBalances />} />
          <Route path="/bill-payment" element={<BillPayment />} />
          <Route path="/transaction-history" element={<TransactionHistory />} />
          <Route path="/fund-transfer" element={<FundTransfer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
