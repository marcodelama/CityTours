import './App.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import PagePrincipal from './components/PagePrincipal';

import ReservaViaje from './components/reserva/ReservaViaje';

function App() {
  return (
    <div>
      <PagePrincipal />
      <ReservaViaje />
    </div>
  );
}

export default App;
