import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import Festivals from './components/Festivals/Festivals';
import useAuth from './useAuth';
import { useDataLayerValue } from './DataLayer';

const urlCode = new URLSearchParams(window.location.search).get('code');

function App() {
  const [{ accessToken, festival }] = useDataLayerValue();
  useAuth(urlCode);

  // return (!festival) ? <Festivals /> :
  //   (!accessToken) ? <Login state='play' cName='spotify__login' text='Login with Spotify' /> :
  //     (sessionStorage.getItem('state') === 'play') ? <Dashboard /> : <AdminDashboard />;

  // return (
  //   festival
  //     ? (!accessToken)
  //       ? <Login state='play' cName='spotify__login' text='Login with Spotify' />
  //       : <Dashboard />
  //     : (sessionStorage.getItem('state') === 'play')
  //       ? <Dashboard />
  //       : <AdminDashboard />
  // )

  return (
    (sessionStorage.getItem('state') === 'admin') ? <AdminDashboard /> :
      festival ?
        accessToken ? <Dashboard /> : <Login state='play' cName='spotify__login' text='Login with Spotify' />
        : <Festivals />
  )

}

export default App;
