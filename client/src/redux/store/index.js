import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from '../reducers';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

function configStore() {
  let store = createStore(persistedReducer, {}, compose(applyMiddleware(thunk)));
  let persistor = persistStore(store);

  return { store, persistor };
}

export default configStore;