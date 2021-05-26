import { GlobalStyle } from './styles/global';
import { Header } from './components/Header/index';
import { Dashboard } from './components/Dashboard';
import { TransactionsTable } from './components/TransactionsTable';

export function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <TransactionsTable />
      <GlobalStyle />
    </>
  );
}