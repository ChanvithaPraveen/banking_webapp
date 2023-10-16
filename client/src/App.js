import './App.css';
import Login from './components/Login';
import Registration from './components/Registration';
import AccountBalances from './components/AccountBalances';
import BillPayment from './components/BillPayment';
import TransactionHistory from './components/TransactionHistory';
import FundTransfer from './components/FundTransfer';
import Users from './components/Users';
import UpdateUser from './components/UpdateUser';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/users" element={<Users />} />
          <Route path="/update-user/:id" element={<UpdateUser />} />
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
