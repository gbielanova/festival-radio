import Dashboard from './components/Dashboard/Dashboard';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import Festivals from './components/Festivals/Festivals';
import useAuth from './useAuth';
import { useDataLayerValue } from './DataLayer';

const urlCode = new URLSearchParams(window.location.search).get('code');

function App() {
  const [{ accessToken, festival }] = useDataLayerValue();
  useAuth(urlCode);

  return (
    // (sessionStorage.getItem('state') === 'admin') ? <AdminDashboard /> :
    //   festival ?
    //     accessToken ? <Dashboard /> : <Login state='play' cName='spotify__login' text='Login with Spotify' />
    //     : <Festivals />

    (sessionStorage.getItem('state') === 'admin') ? <AdminDashboard /> :
      festival ? <Dashboard /> : <Festivals />

  )

}

export default App;
