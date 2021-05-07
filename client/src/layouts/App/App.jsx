import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import AuthGuard from '../../components/Guards/AuthGuard';
import Dashboard from '../Dashboard/Dashboard';
import configStore from '../../redux/store';

let { store, persistor } = configStore();

function App() {
  return (
    <Provider store={ store }>
      <PersistGate loading={ null } persistor={ persistor }>
        <AuthGuard>
          <Dashboard />
        </AuthGuard>
      </PersistGate>
    </Provider>
  );
}

export default App;