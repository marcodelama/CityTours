import './App.css';
<<<<<<< HEAD
import { AuthContextProvider } from './context/AuthContext';
import { MyRoutes } from './routers/MyRoutes';

function App() {
  return (//MyRoutes = Children
    <AuthContextProvider>
      <MyRoutes />
    </AuthContextProvider>

=======
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import PagePrincipal from './components/PagePrincipal';

function App() {
  return (
    <PagePrincipal/>
>>>>>>> c8b168b9230e5b985ef75e98d5280f07317265d4
  );
}

export default App;
