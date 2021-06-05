import Login from './Login';
import Dashboard from './components/Dashboard/Dashboard';
import Festivals from './components/Festivals/Festivals';
import useAuth from './useAuth';
import { useDataLayerValue } from './DataLayer';

const urlCode = new URLSearchParams(window.location.search).get('code');

function App() {
  const [{ accessToken, festival }] = useDataLayerValue();
  useAuth(urlCode);

  console.log(accessToken, festival);

  return (!festival) ? <Festivals /> :
    accessToken ? <Dashboard /> : <Login />;
}

export default App;
