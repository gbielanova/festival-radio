import Login from './Login';
import Dashboard from './components/Dashboard/Dashboard';
import useAuth from './useAuth';
import { useDataLayerValue } from './DataLayer';

const urlCode = new URLSearchParams(window.location.search).get('code');

function App() {
  const [{ accessToken }] = useDataLayerValue();

  useAuth(urlCode);

  return accessToken ? <Dashboard /> : <Login />;
}

export default App;
