import './App.css';
import { AuthContextProvider } from './context/AuthContext';
import { MyRoutes } from './routers/MyRoutes';

function App() {
  return (//MyRoutes = Children
    <AuthContextProvider>
      <MyRoutes />
    </AuthContextProvider>

  );
}

export default App;
